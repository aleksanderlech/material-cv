
export class Project {
    title : String;
    place : String;
    from : String;
    to : String;
    location : String;
    description : String;
    activities : String[];
    technologies : String[];
}

export class Resume {
    projects : Project[];
}