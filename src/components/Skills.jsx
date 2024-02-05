import { Card, CardBody, Typography, } from "@material-tailwind/react";
import { useEffect, useState} from "react"
import Services from "./Services";
const { cardSkill } = Services;

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
      <p id="skills" className="mt-4 text-bold text-4xl text-customCobalt sm:text-[25px]">My Skills</p>
      <div className="lg:flex lg:flex-wrap gap-2 justify-center">
        {skills.map((skill, id) => (
          <Card key={id} className="mt-6 max-w-xs rounded-xl border-solid bg-customCobalt text-customWhite">
            <CardBody className="p-4">
              <img src={skill.icon} alt={skill.icon} className="w-10 h-10 mx-auto mb-4" />
              <Typography className="text-xl sm:text-lg mb-2">
                {skill.title}
              </Typography>
              <Typography className="text-sm">
                {skill.description}
              </Typography>
            </CardBody>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Skill;