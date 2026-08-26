export default function ProjectCard({
  title,
  description,
  technologies,
}) {
  return (
    <div
      style={{
        background: "#1e293b",
        padding: "25px",
        borderRadius: "16px",
        transition: ".3s",
        height: "100%",
      }}
    >
      <h2>{title}</h2>

      <p>{description}</p>

      <div
        style={{
          display: "flex",
          gap: "10px",
          flexWrap: "wrap",
          marginTop: "15px",
        }}
      >
        {technologies.map((tech) => (
          <span
            key={tech}
            style={{
              background: "#0ea5e9",
              padding: "6px 12px",
              borderRadius: "20px",
            }}
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}