import React from "react";

function ProjectItem({ name, about, technologies }) {
  const technoList = technologies.map((techno) => {
    return <span key={techno}>{techno}</span>;
  });
  console.log(technoList);
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">{technoList}</div>
    </div>
  );
}

export default ProjectItem;
