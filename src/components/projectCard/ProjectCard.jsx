import { Link } from "react-router-dom";
import "./ProjectCard.css";

export default function ProjectCard({ image, name }) {
  return (
    <Link className="ProjectCard" to={`/projects/${name}`}>
      <img className="ProjectCard__image" src={image} alt="" />
      <div className="ProjectCard__info">
        <p>{name}</p>
      </div>
    </Link>
  );
}
