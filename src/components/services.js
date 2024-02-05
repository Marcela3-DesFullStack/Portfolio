
const cardSkill = {
  getSkills : async () => {
      let response = await fetch("http://localhost:3000/skills");
      let skills = await response.json();
      return skills;
  },
  getSkill: async (id) => {
      const response = await fetch (`http://localhost:3000/skills/${id}`);
      const skill = await response.json();
      return skill;
  }
};

const cardProject = {
  getProjects : async () => {
      let response = await fetch("http://localhost:3000/projects");
      let projects = await response.json();
      return projects;
  },
  getProject: async (id) => {
      const response = await fetch(`http://localhost:3000/projects/${id}`);
      const project = await response.json();
      return project;
  }
};    

export default { cardSkill, cardProject };
