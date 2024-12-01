
 import skills from "../../data/skills.jsx";
 import  "../../sass/Competence/Competence.scss";

export const Competence  = () => {
  return (
    <section className="compétance-content" id="compétences">
      <h2 className="compétance-title"> Skilss</h2>
      <div className="skills-container">
        {skills.map((skill, id) => (
          <div key={id} className="skill-card">
            <img
              src={skill.imageSrc}
              alt={skill.title}
              className="skill-image"
            />
            <h3 className="skill-title">{skill.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

