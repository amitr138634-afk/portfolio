export interface Resume {
    name: string;
    title: string;
    email: string;
    phone: string;
    summary: string;
    skills: string[];
    experience: Experience[];
    education: Education[];
    projects: Project[];
}

export interface Experience {
    jobTitle: string;
    company: string;
    location: string;
    startDate: string;
    endDate: string;
    responsibilities: string[];
}

export interface Education {
    degree: string;
    institution: string;
    graduationYear: number;
}

export interface Project {
    title: string;
    description: string;
    link: string;
}