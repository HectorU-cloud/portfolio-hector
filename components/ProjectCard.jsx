const TOKENS = {
  bgElevated: "#1b2027",
  bgElevated2: "#202730",
  border: "#2a3038",
  text: "#e9ebee",
  textMuted: "#929aa6",
  accent: "#f2a93c",
  statusOn: "#5fd68a",
  statusOnSoft: "rgba(95, 214, 138, 0.12)",
  statusWarn: "#f2a93c",
  statusWarnSoft: "rgba(242, 169, 60, 0.12)",
};

const STATUS_STYLES = {
  produccion: { color: TOKENS.statusOn, bg: TOKENS.statusOnSoft, label: "En producción" },
  desarrollo: { color: TOKENS.statusWarn, bg: TOKENS.statusWarnSoft, label: "En desarrollo" },
};

export default function ProjectCard({
  title,
  description,
  technologies,
  status,
  link,
}) {
  const statusStyle = STATUS_STYLES[status];

  return (
    <div
      style={{
        background: TOKENS.bgElevated,
        borderRadius: "16px",
        border: `1px solid ${TOKENS.border}`,
        height: "100%",
        display: "flex",
        flexDirection: "column",
        transition: "border-color .25s ease, transform .25s ease",
      }}
    >
      <div style={{ padding: "24px 24px 0" }}>
        {statusStyle && (
          <span
            style={{
              display: "inline-block",
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: "0.7rem",
              letterSpacing: "0.05em",
              textTransform: "uppercase",
              color: statusStyle.color,
              background: statusStyle.bg,
              padding: "4px 10px",
              borderRadius: "999px",
              marginBottom: "14px",
            }}
          >
            {statusStyle.label}
          </span>
        )}

        <h2
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "1.25rem",
            marginBottom: "10px",
            color: TOKENS.text,
          }}
        >
          {title}
        </h2>

        <p style={{ color: TOKENS.textMuted, lineHeight: 1.6, fontSize: "0.95rem" }}>
          {description}
        </p>
      </div>

      <div style={{ padding: "18px 24px 24px", marginTop: "auto" }}>
        <div
          style={{
            display: "flex",
            gap: "8px",
            flexWrap: "wrap",
            marginTop: "6px",
          }}
        >
          {technologies.map((tech) => (
            <span
              key={tech}
              style={{
                fontFamily: "'IBM Plex Mono', monospace",
                fontSize: "0.75rem",
                background: TOKENS.bgElevated2,
                color: TOKENS.textMuted,
                border: `1px solid ${TOKENS.border}`,
                padding: "5px 11px",
                borderRadius: "6px",
              }}
            >
              {tech}
            </span>
          ))}
        </div>

        {link && (
          <a
            href={link}
            target="_blank"
            rel="noreferrer"
            style={{
              display: "inline-block",
              marginTop: "16px",
              color: TOKENS.accent,
              fontSize: "0.85rem",
              fontWeight: 600,
              textDecoration: "none",
            }}
          >
            Ver repositorio →
          </a>
        )}
      </div>
    </div>
  );
}
