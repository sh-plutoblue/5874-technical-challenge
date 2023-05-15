export type Project = {
    Title: string;
    Description: string;
    Type: "Branding" | "Web Design" | "Digital Marketing";
    Image: string;
    Size: "" | "TwoThirds" | "Half" | "Full";
}

export const ProjectsList: Project[] = [{
    Title: "Project 1",
    Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla metus erat, pulvinar at tortor at, condimentum aliquam enim. Ut eget dui mattis, varius lacus sed, feugiat tortor. Nulla a lacinia ante, vel tempus purus. Aenean eu elit a neque vehicula euismod. Cras ultricies faucibus leo, at euismod justo dapibus eu. Nullam a purus elit. Ut accumsan euismod placerat.",
    Type: "Branding",
    Image: "/assets/images/Projects/project-1.png",
    Size: ""
}, {
    Title: "Project 2",
    Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla metus erat, pulvinar at tortor at, condimentum aliquam enim. Ut eget dui mattis, varius lacus sed, feugiat tortor. Nulla a lacinia ante, vel tempus purus. Aenean eu elit a neque vehicula euismod. Cras ultricies faucibus leo, at euismod justo dapibus eu. Nullam a purus elit. Ut accumsan euismod placerat.",
    Type: "Web Design",
    Image: "/assets/images/Projects/project-2.png",
    Size: ""
}, {
    Title: "Project 3",
    Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla metus erat, pulvinar at tortor at, condimentum aliquam enim. Ut eget dui mattis, varius lacus sed, feugiat tortor. Nulla a lacinia ante, vel tempus purus. Aenean eu elit a neque vehicula euismod. Cras ultricies faucibus leo, at euismod justo dapibus eu. Nullam a purus elit. Ut accumsan euismod placerat.",
    Type: "Digital Marketing",
    Image: "/assets/images/Projects/project-3.png",
    Size: ""
}, {
    Title: "Project 4",
    Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla metus erat, pulvinar at tortor at, condimentum aliquam enim. Ut eget dui mattis, varius lacus sed, feugiat tortor. Nulla a lacinia ante, vel tempus purus. Aenean eu elit a neque vehicula euismod. Cras ultricies faucibus leo, at euismod justo dapibus eu. Nullam a purus elit. Ut accumsan euismod placerat.",
    Type: "Branding",
    Image: "/assets/images/Projects/project-4.png",
    Size: "TwoThirds"
}, {
    Title: "Project 5",
    Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla metus erat, pulvinar at tortor at, condimentum aliquam enim. Ut eget dui mattis, varius lacus sed, feugiat tortor. Nulla a lacinia ante, vel tempus purus. Aenean eu elit a neque vehicula euismod. Cras ultricies faucibus leo, at euismod justo dapibus eu. Nullam a purus elit. Ut accumsan euismod placerat.",
    Type: "Web Design",
    Image: "/assets/images/Projects/project-5.png",
    Size: ""
}]