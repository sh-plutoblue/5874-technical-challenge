export type Testimonial = {
    Name: string;
    Image: string;
    Testimonial: string;
    JobTitle: string;
    Company: string;
}

export const TestimonialsList: Testimonial[] = [{
    Name: "Paul Simon",
    Image: "/assets/images/Testimonials/testimonial-3.png",
    Testimonial: "Working with Digital Spaniel has been a breath of fresh air. Their approach and attitude kept me informed and included from the start. Super pleased with the end results too!",
    JobTitle: "Founder",
    Company: "MegaCorp"
}, {
    Name: "Johnny B. Goode",
    Image: "/assets/images/Testimonials/testimonial-1.png",
    Testimonial: "Advice and support from DigiSpan was second to none. Always willing to help and offer advice and solutions. A very good and rapid understanding of our requirements was key to this.",
    JobTitle: "CEO",
    Company: "Getting Things Done"
}, {
    Name: "Mary Jane",
    Image: "/assets/images/Testimonials/testimonial-2.png",
    Testimonial: "We needed a creative and unique brand which could compete against established products. Digital Spaniel delivered in spades and we’ve seen a huge response to the product launch.",
    JobTitle: "CEO",
    Company: "Design Matters"
}]