import { Card, CardBody, Typography, } from "@material-tailwind/react";
import  cardSkill  from "./Services.js"
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
    <div className="container mx-auto sm:p-4 lg:p-8 bg-customWhite">
      <div> 
        <p className="mt-4 text-bold text-4xl text-customCobalt sm:text-[25px]">My Skills</p>
        <div className="lg:flex gap-4">
          {skills.map ((skill, id) => (
          <Card key={id} className="mt-6 p-1/2 rounded-xl border-solid bg-customCobalt text-customWhite ">
            <CardBody>
              <img src={skill.icon} alt={skill.icon} className= "w-10 h-10 pb-2 mx-auto sm=w-6 sm:h-10"/>
              <Typography className="mb-2 md:text-2x1 sm:text-sm">
                {skill.title}
              </Typography>
              <Typography  className="mb-2 text-[18px] sm:text-sm">
                {skill.description}
              </Typography>
            </CardBody>
          </Card>
          ))}
        </div>
      </div>
    
    </div>
  );
}
export default Skill