import { Card, CardBody, Typography, } from "@material-tailwind/react";
import  cardSkill  from "../components/services.js";
import { useEffect, useState} from "react"

function Skill() {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const fetchSkills = async () => {
      const skillsData = await cardSkill.getSkills();
      setSkills(skillsData);
      console.log(skillsData);
    };

    fetchSkills();
  }, []);
   
  return (
    <div className="container mx-auto sm:p-4 lg:p-20 bg-customWhite">
      <div className="text-bold text-3xl text-customCobalt sm:text-[25px]"> My Skills
        {skills.map ((skill, id) => (
        <Card key={id} className="mt-6 w-70">
          <CardBody>
            <img src={skill.icon} alt={skill.icon} />
            <Typography variant="h5" color="blue-gray" className="mb-2">
              {skill.title}
            </Typography>
            <Typography>
              {skill.description}
            </Typography>
          </CardBody>
        </Card>
        ))}
      </div>
    
    </div>
  );
}
export default Skill