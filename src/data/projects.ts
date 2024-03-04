export type Project = {
  name: string;
  companyName: string;
  companyWebsite?: string;
  projectWebsite?: string;
  coverImagePath?: string;
  description: string;
  currentlyWorking?: boolean;
};

export const projects: Array<Project> = [
  {
    name: 'Calper',
    companyName: 'Ispana',
    companyWebsite: 'http://www.ispana.es',
    description:
      'Vue application designed for mobile usage complemented by a React counterpart tailored for desktop use, focusing on the medical domain',
    currentlyWorking: true,
  },
  {
    name: 'DiabPlus',
    companyName: 'Ispana',
    companyWebsite: 'http://www.ispana.es',
    description:
      'React project with a primary focus on Data Visualization for diabetes complications diagnosis',
  },
  {
    name: 'C4',
    companyName: 'ULL',
    companyWebsite: 'https://www.ull.es',
    description: 'React-based web platform for organizing computer thinking resources',
  },
  {
    name: 'Super-Resolution',
    companyName: 'Ownership',
    description: 'Worked here in the project bla bla',
  },
  {
    name: 'Explosive Kawaii Slimes Bubble Shouter',
    companyName: 'Ownership',
    description: 'Unity VR project that uses your voice to shoot slime-killing bubbles',
    coverImagePath: '/static/images/slime.png',
  },
];
