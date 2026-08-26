export default function ProfileCard() {
  return (
    <div
      style={{
        background: "#1e293b",
        padding: "2rem",
        borderRadius: "16px",
        boxShadow: "0 10px 25px rgba(0,0,0,.3)",
      }}
    >
      <h2>Héctor Urgiles</h2>

      <p>
        Ingeniero de Aseguramiento Corporativo con experiencia en
        infraestructura tecnológica, inventario de activos,
        redes empresariales y automatización.
      </p>

      <h3>Tecnologías</h3>

      <div
        style={{
          display: "flex",
          gap: "10px",
          flexWrap: "wrap",
        }}
      >
        {[
          "Python",
          "FastAPI",
          "Node.js",
          "React",
          "Astro",
          "PostgreSQL",
          "Docker",
          "Cisco",
          "Dell",
        ].map((skill) => (
          <span
            key={skill}
            style={{
              background: "#0ea5e9",
              padding: "8px 12px",
              borderRadius: "20px",
            }}
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}