export interface LabProgramConfig {
  name: string;
  degree: 'BCA' | 'MCA';
  semester: string;
  subject: string;
  year: string;
  description: string;
  technologies: string[];
}

export const labProgramsConfig: LabProgramConfig[] = [
  {
    name: 'MCA-S3-Android-Lab',
    degree: 'MCA',
    semester: 'Semester 3',
    subject: 'Android Development',
    year: '2026',
    description: 'Android development laboratory implementations created as part of MCA Semester 3 coursework. Contains practical mobile applications demonstrating UI design, activities, intents, layouts, storage management, and Android application concepts.',
    technologies: ['Java', 'Android Studio', 'XML', 'Android']
  },
  {
    name: 'MCA-S2-OOPL',
    degree: 'MCA',
    semester: 'Semester 2',
    subject: 'Object Oriented Programming Lab',
    year: '2026',
    description: 'Object-oriented programming implementations developed for MCA Semester 2 coursework. Showcases core Java concepts including inheritance, polymorphism, encapsulation, interfaces, and exception handling through practical exercises.',
    technologies: ['Java', 'OOP', 'Programming Languages']
  },
  {
    name: 'MCA-S1-PL',
    degree: 'MCA',
    semester: 'Semester 1',
    subject: 'Programming Languages',
    year: '2025',
    description: 'Core programming logic and algorithmic solutions from MCA Semester 1. Focuses on foundational language constructs, control structures, and basic computational problem solving.',
    technologies: ['C', 'Programming Languages', 'Logic']
  },
  {
    name: 'MCA-S1-ADS',
    degree: 'MCA',
    semester: 'Semester 1',
    subject: 'Advanced Data Structures',
    year: '2025',
    description: 'Collection of Algorithm and Data Structure implementations developed as part of MCA Semester 1 laboratory exercises, covering searching, sorting, linked lists, stacks, queues, and algorithmic problem solving.',
    technologies: ['C', 'Data Structures', 'Algorithms']
  },
  {
    name: 'MCA-S1-WDL',
    degree: 'MCA',
    semester: 'Semester 1',
    subject: 'Web Design Lab',
    year: '2025',
    description: 'Full-stack web development exercises covering front-end design, server-side scripting, and database integration created during MCA Semester 1 Web Design coursework.',
    technologies: ['HTML', 'CSS', 'PHP', 'Web Development']
  },
  {
    name: 'BCA-S6-SHELL-PRGMS',
    degree: 'BCA',
    semester: 'Semester 6',
    subject: 'Shell Programming',
    year: '2025',
    description: 'Linux shell scripting and system administration scripts from BCA Semester 6. Includes Bash scripts automating file operations, system monitoring, and basic command-line utilities.',
    technologies: ['Shell', 'Linux', 'Bash']
  },
  {
    name: 'BCA-Android-Programming',
    degree: 'BCA',
    semester: 'Semester 6',
    subject: 'Android Programming',
    year: '2025',
    description: 'Fundamental mobile application development exercises from BCA Semester 6. Covers foundational Android concepts, simple UIs, event listeners, and basic app deployment.',
    technologies: ['Java', 'Android Studio', 'XML', 'Android']
  },
  {
    name: 'BCA-S5-PHP',
    degree: 'BCA',
    semester: 'Semester 5',
    subject: 'PHP Programming',
    year: '2024',
    description: 'Dynamic web scripting projects and exercises using PHP. Developed during BCA Semester 5 to demonstrate server-side logic, form handling, and web integration.',
    technologies: ['PHP', 'Web Development']
  },
  {
    name: 'BCA-S5-JAVA-PRGMS',
    degree: 'BCA',
    semester: 'Semester 5',
    subject: 'Java Programming',
    year: '2024',
    description: 'Introductory Java programming lab exercises from BCA Semester 5. Includes practical examples of syntax, basic OOP, data types, and simple I/O operations.',
    technologies: ['Java', 'OOP', 'Programming Languages']
  },
  {
    name: 'BCA-S5-HTML-PRGMS',
    degree: 'BCA',
    semester: 'Semester 5',
    subject: 'HTML Programming',
    year: '2024',
    description: 'Foundational front-end web design exercises from BCA Semester 5. Focuses on semantic HTML structure, basic CSS styling, and responsive layout techniques.',
    technologies: ['HTML', 'Web Development', 'CSS']
  }
];
