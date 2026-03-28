import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "麦伸ぬーどる | 帯広の深夜〆ラーメン";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #000000 0%, #1A1A1A 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}
      >
        {/* Border frame */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "600px",
            height: "300px",
            border: "1px solid rgba(230, 57, 70, 0.2)",
            display: "flex",
          }}
        />

        {/* Red line above */}
        <div
          style={{
            width: "80px",
            height: "2px",
            background: "rgba(230, 57, 70, 0.6)",
            marginBottom: "40px",
            display: "flex",
          }}
        />

        {/* Shop name */}
        <div
          style={{
            fontSize: "80px",
            color: "#E63946",
            letterSpacing: "0.1em",
            fontWeight: 700,
            display: "flex",
          }}
        >
          麦伸ぬーどる
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: "20px",
            color: "rgba(255, 209, 102, 0.6)",
            letterSpacing: "0.3em",
            marginTop: "24px",
            display: "flex",
          }}
        >
          深夜の一杯、ここにあり。
        </div>

        {/* Red line below */}
        <div
          style={{
            width: "80px",
            height: "2px",
            background: "rgba(230, 57, 70, 0.6)",
            marginTop: "40px",
            display: "flex",
          }}
        />

        {/* Bottom info */}
        <div
          style={{
            position: "absolute",
            bottom: "40px",
            fontSize: "14px",
            color: "rgba(255, 255, 255, 0.3)",
            letterSpacing: "0.2em",
            display: "flex",
          }}
        >
          帯広駅徒歩5分 — ラーメン · 餃子 · 深夜営業
        </div>
      </div>
    ),
    { ...size }
  );
}
