import { ImageResponse } from "next/og";

import { SITE_NAME, SITE_TAGLINE } from "@/lib/site";

export const OG_SIZE = { width: 1200, height: 630 };

type OgImageProps = {
  title: string;
  subtitle?: string;
  eyebrow?: string;
};

export function createOgImage({
  title,
  subtitle,
  eyebrow = SITE_NAME,
}: OgImageProps) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#171717",
          color: "#fafafa",
          padding: "72px 80px",
          fontFamily: "ui-sans-serif, system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 22,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#a1a1a1",
          }}
        >
          {eyebrow}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div
            style={{
              display: "flex",
              fontSize: title.length > 32 ? 56 : 72,
              fontWeight: 500,
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
              maxWidth: 980,
            }}
          >
            {title}
          </div>
          {subtitle ? (
            <div
              style={{
                display: "flex",
                fontSize: 28,
                color: "#a1a1a1",
                lineHeight: 1.35,
                maxWidth: 900,
              }}
            >
              {subtitle}
            </div>
          ) : null}
        </div>
      </div>
    ),
    OG_SIZE,
  );
}

export function createDefaultOgImage() {
  return createOgImage({
    eyebrow: SITE_NAME,
    title: SITE_TAGLINE,
    subtitle: "Frontier closed models and significant open-weight systems.",
  });
}
