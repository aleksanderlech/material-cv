
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

export interface Contact {
    name: String;
    phone: String;
    mail: String;
    linkedin: String;
    github: String;
    twitter: String;
    skype: String;
    cv: String;
}

export interface Resume {
    contact : Contact;
    projects : Project[];
    initiatives : Initiative[];
}