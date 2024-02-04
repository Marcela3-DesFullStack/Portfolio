import { Card, CardBody, Typography, } from "@material-tailwind/react";


function Skills() {
  const getSkills = async () => {
    let response = await fetch ("http://localhost:3000/skills")
    let skills = await response.json();
  }
   
  return (
    <div className="container mx-auto sm:p-4 lg:p-20 bg-customWhite">
      <div className="text-bold text-3xl text-customCobalt sm:text-[25px]"> My Skills

        <Card className="mt-6 w-70">
          <CardBody>
            <Typography variant="h5" color="blue-gray" className="mb-2">
              UI/UX Review Check
            </Typography>
            <Typography>
              The place is close to Barceloneta Beach and bus stop just 2 min by
              walk and near to &quot;Naviglio&quot; where you can enjoy the main
              night life in Barcelona.
            </Typography>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}
export default Skills