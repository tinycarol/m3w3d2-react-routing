import projects from "../../data/projects.json";
import GoBack from "../goBack/GoBack";

export default function Project({ match, history }) {
  const { name } = match.params;
  const project = projects.find((project) => project.name === name);
  if (!project) {
    return <h2>Project not found :c</h2>;
  }
  return (
    <div className="Project">
      <GoBack history={history} />
      <h2>💕 {project.name} 💕</h2>
      <img src={project.image} alt="" />
      <p>Name: {project.name}</p>
      <p>
        Company: <a href={project.company.url}>{project.company.name}</a>
      </p>
      <p>Description: {project.description}</p>
    </div>
  );
}
