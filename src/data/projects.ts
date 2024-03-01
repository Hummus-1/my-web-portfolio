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
    companyWebsite: 'ispana.es',
    description: 'Worked here in the project bla bla',
    currentlyWorking: true,
  },
  {
    name: 'DiabPlus',
    companyName: 'Ispana',
    companyWebsite: 'ispana.es',
    description: 'Worked here in the project bla bla',
  },
  {
    name: 'C4',
    companyName: 'ULL',
    companyWebsite: 'ull.es',
    description: 'Worked here in the project bla bla',
  },
  {
    name: 'Super-Resolution',
    companyName: 'Ownership',
    description: 'Worked here in the project bla bla',
  },
  {
    name: 'Explosive Kawaii Slimes Bubble Shouter',
    companyName: 'Ownership',
    description: 'Worked here in the project bla bla',
  },
];
