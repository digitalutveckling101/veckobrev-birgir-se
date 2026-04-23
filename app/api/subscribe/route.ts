import { NextResponse } from "next/server";

const MAILERLITE_GROUP_ID = "REPLACE_WITH_GROUP_ID";
const MAILERLITE_ENDPOINT = "https://connect.mailerlite.com/api/subscribers";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Ogiltigt format." }, { status: 400 });
  }

  const body = payload as {
    name?: unknown;
    email?: unknown;
    consent?: unknown;
  };

  const name = typeof body.name === "string" ? body.name.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const consent = body.consent === true;

  if (!consent) {
    return NextResponse.json(
      { error: "Du behöver godkänna hanteringen av dina uppgifter." },
      { status: 400 }
    );
  }
  if (name.length < 1 || name.length > 80) {
    return NextResponse.json(
      { error: "Skriv in ett förnamn på 1 till 80 tecken." },
      { status: 400 }
    );
  }
  if (!EMAIL_REGEX.test(email)) {
    return NextResponse.json(
      { error: "Den där e-postadressen ser inte rätt ut." },
      { status: 400 }
    );
  }

  const apiKey = process.env.MAILERLITE_API_KEY;
  if (!apiKey) {
    console.error("MAILERLITE_API_KEY saknas i miljön.");
    return NextResponse.json(
      { error: "Servern är inte konfigurerad. Försök igen senare." },
      { status: 500 }
    );
  }

  if (MAILERLITE_GROUP_ID === "REPLACE_WITH_GROUP_ID") {
    console.error("MailerLite group ID är inte satt.");
    return NextResponse.json(
      { error: "Servern är inte konfigurerad. Försök igen senare." },
      { status: 500 }
    );
  }

  try {
    const mlRes = await fetch(MAILERLITE_ENDPOINT, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        email,
        fields: { name },
        groups: [MAILERLITE_GROUP_ID],
        status: "active",
      }),
    });

    if (!mlRes.ok) {
      const details = await mlRes.text();
      console.error("MailerLite-fel", mlRes.status, details);
      return NextResponse.json(
        { error: "Det gick inte att registrera dig just nu. Försök igen om en stund." },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("MailerLite undantag", err);
    return NextResponse.json(
      { error: "Det gick inte att registrera dig just nu. Försök igen om en stund." },
      { status: 502 }
    );
  }
}
