const TOKENS = {
  bgElevated: "#1b2027",
  bgElevated2: "#202730",
  border: "#2a3038",
  text: "#e9ebee",
  textMuted: "#929aa6",
  textFaint: "#5b636f",
  accent: "#f2a93c",
};

const stack = [
  "Python",
  "FastAPI",
  "Node.js",
  "React",
  "Astro",
  "PostgreSQL",
  "Docker",
  "Cisco",
  "Fortinet",
  "Dell",
];

export default function ProfileCard() {
  return (
    <div
      style={{
        background: TOKENS.bgElevated,
        borderRadius: "16px",
        border: `1px solid ${TOKENS.border}`,
        overflow: "hidden",
      }}
    >
      {/* Franja tipo "etiqueta de equipo" */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "10px 20px",
          background: TOKENS.bgElevated2,
          borderBottom: `1px solid ${TOKENS.border}`,
          fontFamily: "'IBM Plex Mono', monospace",
          fontSize: "0.72rem",
          letterSpacing: "0.06em",
          color: TOKENS.textFaint,
        }}
      >
        <span>FICHA · HU-01</span>
        <span style={{ color: "#5fd68a" }}>● ACTIVO</span>
      </div>

      <div style={{ padding: "2rem" }}>
        <img
          src="/profile.jpeg"
          alt="Foto de Héctor Urgiles"
          style={{
            width: "140px",
            height: "140px",
            objectFit: "cover",
            borderRadius: "50%",
            display: "block",
            margin: "0 auto 20px",
            border: `2px solid ${TOKENS.accent}`,
          }}
        />

        <p
          style={{
            textAlign: "center",
            color: TOKENS.accent,
            fontFamily: "'IBM Plex Mono', monospace",
            fontSize: "0.85rem",
            letterSpacing: "0.03em",
            marginBottom: "14px",
          }}
        >
          Ingeniero de Aseguramiento Corporativo
        </p>

        <p style={{ color: TOKENS.textMuted, lineHeight: 1.6 }}>
          Gestiono infraestructura tecnológica, inventario de activos e
          integridad de una flota de red de gran escala, con foco en
          automatización y trazabilidad.
        </p>

        <h3
          style={{
            marginTop: "22px",
            fontSize: "0.78rem",
            fontFamily: "'IBM Plex Mono', monospace",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: TOKENS.textFaint,
            fontWeight: 500,
          }}
        >
          Stack
        </h3>

        <div
          style={{
            display: "flex",
            gap: "8px",
            flexWrap: "wrap",
            marginTop: "10px",
          }}
        >
          {stack.map((skill) => (
            <span
              key={skill}
              style={{
                background: TOKENS.bgElevated2,
                color: TOKENS.textMuted,
                border: `1px solid ${TOKENS.border}`,
                padding: "6px 12px",
                borderRadius: "6px",
                fontSize: "0.78rem",
                fontFamily: "'IBM Plex Mono', monospace",
              }}
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
