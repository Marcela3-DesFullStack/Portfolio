
const cardSkill = {
  getSkills : async () => {
      let response = await fetch("https://api-portfolio-beta.vercel.app/skills");
      let skills = await response.json();
      return skills;
  },
  getSkill: async (id) => {
      const response = await fetch (`https://api-portfolio-beta.vercel.app/skills/${id}`);
      const skill = await response.json();
      return skill;
  }
};

const cardProject = {
  getProjects : async () => {
      let response = await fetch("https://api-portfolio-beta.vercel.app/projects");
      let projects = await response.json();
      return projects;
  },
  getProject: async (id) => {
      const response = await fetch(`https://api-portfolio-beta.vercel.app/projects/${id}`);
      const project = await response.json();
      return project;
  }
};    

export default { cardSkill, cardProject };
