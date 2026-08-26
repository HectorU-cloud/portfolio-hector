export default function ProfileCard() {
  return (
    <div
      style={{
        background: "#1e293b",
        padding: "2rem",
        borderRadius: "16px",
        boxShadow: "0 10px 25px rgba(0,0,0,.3)",
        color: "white",
      }}
    >
      <img
        src="/profile.jpeg"
        alt="Foto de Héctor Urgiles"
        style={{
          width: "150px",
          height: "150px",
          objectFit: "cover",
          borderRadius: "50%",
          display: "block",
          margin: "0 auto 20px",
          border: "3px solid #38bdf8",
        }}
      />

      <p
        style={{
          color: "#38bdf8",
          fontWeight: "bold",
          marginBottom: "15px",
        }}
      >
        Ingeniero de Aseguramiento Corporativo
      </p>

      <p>
        Profesional con experiencia en infraestructura tecnológica,
        inventario de activos TI, redes empresariales, automatización
        y aseguramiento corporativo.
      </p>

      <h3
        style={{
          marginTop: "20px",
        }}
      >
        Tecnologías
      </h3>

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
              color: "white",
              padding: "8px 12px",
              borderRadius: "20px",
              fontSize: "0.9rem",
              fontWeight: "600",
            }}
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
