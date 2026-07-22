export interface LabProgramConfig {
  repository: string;
  category: string;
  semester: string;
  subject: string;
  technologies: string[];
}

export const labProgramsConfig: LabProgramConfig[] = [
  {
    repository: "MCA-S3-Android-Lab",
    category: "MCA",
    semester: "Semester 3",
    subject: "Android Development",
    technologies: ["Java", "Android Studio", "XML", "Android"]
  },
  {
    repository: "MCA-S2-OOPL",
    category: "MCA",
    semester: "Semester 2",
    subject: "Object Oriented Programming",
    technologies: ["Java", "OOP"]
  },
  {
    repository: "MCA-S1-PL",
    category: "MCA",
    semester: "Semester 1",
    subject: "Programming Lab",
    technologies: ["C", "Programming Languages"]
  },
  {
    repository: "MCA-S1-ADS",
    category: "MCA",
    semester: "Semester 1",
    subject: "Algorithms and Data Structures",
    technologies: ["C", "Data Structures", "Algorithms"]
  },
  {
    repository: "MCA-S1-WDL",
    category: "MCA",
    semester: "Semester 1",
    subject: "Web Design Lab",
    technologies: ["HTML", "CSS", "PHP", "Web Development"]
  },
  {
    repository: "BCA-S5-PHP",
    category: "BCA",
    semester: "Semester 5",
    subject: "PHP Programming",
    technologies: ["PHP", "Web Development"]
  },
  {
    repository: "BCA-S5-JAVA-PRGMS",
    category: "BCA",
    semester: "Semester 5",
    subject: "Java Programming",
    technologies: ["Java", "OOP"]
  },
  {
    repository: "BCA-S6-SHELL-PRGMS",
    category: "BCA",
    semester: "Semester 6",
    subject: "Shell Programming",
    technologies: ["Shell", "Linux"]
  },
  {
    repository: "BCA-S5-HTML-PRGMS",
    category: "BCA",
    semester: "Semester 5",
    subject: "HTML Programming",
    technologies: ["HTML", "Web Development"]
  },
  {
    repository: "BCA-Android-Programming",
    category: "BCA",
    semester: "Semester 6",
    subject: "Android Programming",
    technologies: ["Java", "Android Studio", "XML", "Android"]
  }
];
