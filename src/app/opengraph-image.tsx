import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Care Bora Kenya — Advancing Health, Empowering Communities";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background:
            "linear-gradient(135deg, #001a0e 0%, #003d22 30%, #006B3F 65%, #004d2e 85%, #001a0e 100%)",
          padding: "60px 80px",
          position: "relative",
        }}
      >
        {/* Dot pattern overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />

        {/* Top label */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            marginBottom: 32,
          }}
        >
          <div
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              background: "#C8902E",
            }}
          />
          <span
            style={{
              color: "#C8902E",
              fontSize: 18,
              fontWeight: 700,
              letterSpacing: 6,
              textTransform: "uppercase",
            }}
          >
            Youth-Led Health Organization · Kenya
          </span>
          <div
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              background: "#C8902E",
            }}
          />
        </div>

        {/* Main title */}
        <div
          style={{
            color: "#ffffff",
            fontSize: 88,
            fontWeight: 800,
            textAlign: "center",
            lineHeight: 1.05,
            letterSpacing: -2,
          }}
        >
          Care Bora Kenya
        </div>

        {/* Divider */}
        <div
          style={{
            width: 120,
            height: 3,
            background:
              "linear-gradient(to right, transparent, #C8902E, transparent)",
            margin: "28px 0",
          }}
        />

        {/* Tagline */}
        <div
          style={{
            color: "rgba(167,243,208,0.9)",
            fontSize: 26,
            textAlign: "center",
            maxWidth: 800,
            lineHeight: 1.4,
          }}
        >
          Advancing Health · Promoting Equity · Empowering Communities
        </div>

        {/* Bottom domain */}
        <div
          style={{
            position: "absolute",
            bottom: 40,
            color: "rgba(255,255,255,0.35)",
            fontSize: 18,
            letterSpacing: 2,
          }}
        >
          carebora.co.ke
        </div>
      </div>
    ),
    { ...size }
  );
}
