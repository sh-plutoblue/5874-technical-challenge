export type LinkSections = {
    Title: string;
    Links: Link[];
}

export type Link = {
    Redirect: string;
    Text: string;
    SubText?: string;
}

export const Links: LinkSections[] = [{
    Title: "Brand",
    Links: [{
        Text: "Brand Strategy",
        Redirect: ""
    }, {
        Text: "Logo & Name",
        Redirect: ""
    }, {
        Text: "Identity & Collateral",
        Redirect: ""
    }]
}, {
    Title: "Marketing",
    Links: [{
        Text: "Digital",
        Redirect: ""
    }, {
        Text: "Market Research",
        Redirect: ""
    }]
}, {
    Title: "Development",
    Links: [{
        Text: "eCommerce",
        Redirect: ""
    }, {
        Text: "Web Development",
        Redirect: ""
    }, {
        Text: "Mobile Apps",
        Redirect: ""
    }]
}]

export const FooterLinks: LinkSections[] = [{
    Title: "Explore",
    Links: [{
        Text: "Services",
        Redirect: ""
    }, {
        Text: "Work",
        Redirect: ""
    }, {
        Text: "About",
        Redirect: ""
    }, {
        Text: "Blog",
        Redirect: ""
    }, {
        Text: "Careers",
        Redirect: ""
    }]
}, {
    Title: "Services",
    Links: [{
        Text: "Brand",
        Redirect: ""
    }, {
        Text: "Development",
        Redirect: ""
    }, {
        Text: "Marketing",
        Redirect: ""
    }]
}, {
    Title: "Questions",
    Links: [{
        Text: "Call Us",
        SubText: "0121 345 678",
        Redirect: ""
    }, {
        Text: "Email Us",
        SubText: "info@digitalspaniel.co.uk",
        Redirect: ""
    }]
}]