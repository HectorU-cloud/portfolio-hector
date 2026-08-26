export default function KpiCard({ title, value, color }) {
  return (
    <div
      style={{
        background: "#1e293b",
        padding: "20px",
        borderRadius: "12px",
        borderLeft: `5px solid ${color}`,
      }}
    >
      <h3>{title}</h3>

      <h1
        style={{
          color: color,
          margin: 0,
        }}
      >
        {value}
      </h1>
    </div>
  );
}