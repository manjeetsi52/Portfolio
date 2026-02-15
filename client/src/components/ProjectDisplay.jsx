
import { projectsData } from "../assets/api/data";
import { ProjectCard } from "../components/ProjectCard.jsx";

export const ProjectDisplay = () => {

  return (
    <section
      id="projectDisplay"
      className="h-fit"
      
    >
      <div
        className="flex flex-col gap-10 md:gap-20 h-full"
      >
        {projectsData.map((project) => (
          <div key={project.id} className="project-card">
            <ProjectCard {...project} />
          </div>
        ))}
      </div>
    </section>
  );
};
