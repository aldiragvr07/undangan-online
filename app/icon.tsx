import { ImageResponse } from "next/og";

export const size = {
  width: 64,
  height: 64,
};

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background:
            "linear-gradient(145deg, #8B6F4E 0%, #6B4F36 55%, #4E3928 100%)",
          color: "#FAF3E8",
          borderRadius: "18px",
          border: "3px solid rgba(250, 243, 232, 0.2)",
          boxSizing: "border-box",
          position: "relative",
          fontFamily: "Georgia, serif",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at top left, rgba(250,243,232,0.28), transparent 46%)",
          }}
        />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 28,
            fontStyle: "italic",
            fontWeight: 700,
            letterSpacing: "-0.06em",
            lineHeight: 1,
            textShadow: "0 2px 10px rgba(0,0,0,0.18)",
          }}
        >
          di
        </div>
      </div>
    ),
    size,
  );
}
