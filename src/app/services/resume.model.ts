
interface Experience {
    from : String;
    to : String;
    description : String;
    activities : String[];
    technologies : String[];
}

export interface Initiative extends Experience {
    name : String;
    media : String[];
}

export interface Project extends Experience {
    title : String;
    place : String;
    location : String;
}

export interface Resume {
    projects : Project[];
    initiatives : Initiative[];
}