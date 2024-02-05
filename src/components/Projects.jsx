import { Card, CardBody, Typography, } from "@material-tailwind/react";
import { useEffect, useState} from "react"
import Services from "./Services";
const { cardProject } = Services;

function Project() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const projectsData = await cardProject.getProjects();
      setProjects(projectsData);
      console.log(projectsData);
    };

    fetchProjects();
  }, []);
   
  return (
    <div className="container mx-auto sm:p-4 lg:p-8 bg-customWhite">
      <p id="projects" className="mt-4 text-bold text-4xl text-customCobalt sm:text-[25px]">Projects</p>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {projects.map((project, id) => (
          <Card key={id} className="mt-6 border border-blue-500 bg-gray-200 mt-6 max-w-xs rounded-xl border-solid bg-customCobalt text-customWhite">
            <CardBody className="p-4"> 
                <a href={project.link}>
                    <Typography className="text-xl sm:text-lg mb-2">
                    {project.title}
                    </Typography>
                </a>
                <img src={project.image} alt={project.image} className="w-10 h-10 mx-auto mb-4" />
                <Typography className="text-xl sm:text-lg mb-2">
                {project.subject}
                </Typography>
                <Typography className="text-sm">
                {project.languages}
                </Typography>
            </CardBody>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Project;