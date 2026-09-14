export default function DownloadApp() {
  return (
    <a
      href="/download-apk"
      download="Gokul-AI.apk"
      aria-label="Download Gokul AI Android app"
      style={{
        position: "fixed",
        left: 18,
        bottom: 18,
        zIndex: 150,
        display: "inline-flex",
        alignItems: "center",
        gap: 9,
        padding: "12px 16px",
        borderRadius: 999,
        border: "1px solid rgba(192,132,252,.35)",
        background: "linear-gradient(135deg,#c084fc,#9333ea)",
        color: "#fff",
        fontSize: 12,
        fontWeight: 800,
        boxShadow: "0 12px 35px rgba(124,58,237,.35)",
      }}
    >
      <span aria-hidden="true">↓</span>
      Download Gokul AI
    </a>
  );
}
