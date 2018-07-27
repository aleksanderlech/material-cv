
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

export interface Testimonial {
    quote: String;
    name: String;
    position: String;
}

export interface Profile {
    name: String;
    title: String;
    summary: String;
    contact: Contact;
}

export interface Contact {
    phone: String;
    mail: String;
    linkedin: String;
    github: String;
    twitter: String;
    skype: String;
    website: String;
    cv: String;
}

export interface Education {
    name: String;
    period: String;
    institution: String;
    description : String;
}

export interface Offer {
    summary: String;
    solutions: String[];
}

export interface Company {
    name: String;
    sector: String;
}

export interface Resume {
    profile : Profile;
    education: Education[];
    projects : Project[];
    initiatives : Initiative[];
    testimonials : Testimonial[];
    companies: Company[];
    offer: Offer;
}