export default function KpiCard({ title, value, color = "#f2a93c" }) {
  return (
    <div
      style={{
        background: "#1b2027",
        padding: "22px",
        borderRadius: "12px",
        border: "1px solid #2a3038",
        borderTop: `2px solid ${color}`,
      }}
    >
      <h3
        style={{
          fontFamily: "'IBM Plex Mono', monospace",
          fontSize: "0.75rem",
          letterSpacing: "0.05em",
          textTransform: "uppercase",
          color: "#929aa6",
          fontWeight: 500,
          marginBottom: "8px",
        }}
      >
        {title}
      </h3>

      <h1
        style={{
          fontFamily: "'IBM Plex Mono', monospace",
          color: "#e9ebee",
          margin: 0,
          fontSize: "2.1rem",
        }}
      >
        {value}
      </h1>
    </div>
  );
}
