import type { MetadataRoute } from "next";

const siteUrl = "https://veckobrev.birgir.se";

const socialBots = [
  "facebookexternalhit",
  "Twitterbot",
  "LinkedInBot",
  "Facebot",
  "Slackbot",
  "Slackbot-LinkExpanding",
  "WhatsApp",
  "Discordbot",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      ...socialBots.map((userAgent) => ({
        userAgent,
        allow: "/",
      })),
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/tack", "/api/"],
      },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}
