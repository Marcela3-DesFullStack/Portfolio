
const API_URL = "http://localhost:3000/skills"

const cardSkill = {
    getSkills : async () => {
        let response = await fetch(API_URL);
        let skills = await response.json();
        return skills;
      },
    getSkill: async (id) => {
        const response = await fetch(`${API_URL}/${id}`);
        const skill = await response.json();
        return skill
      }
    }


export default cardSkill