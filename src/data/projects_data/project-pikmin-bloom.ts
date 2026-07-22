import type { ProjectBase } from '../project-types';

export const smartUmbrellaStand: ProjectBase = {
    title: "Pikmin Bloom 飾品追蹤紀錄簿",
    description: "Pikmin Bloom Decor Tracker",
    detailedContent: [
        {
            type: 'heading',
            content: 'Introduction'
        },
        {
            type: 'paragraph',
            content: 'Easy to track your collection of Pikmin Decor, record every step and the moment of blooming.'
        },
        {
            type: 'heading',
            content: 'Prototype'
        },
        {
            type: 'image',
            src: 'images/projects/pikmin_bloom_home.png',
            alt: 'home page of the Pikmin Bloom Decor Tracker'
        },
        {
            type: 'image',
            src: 'images/projects/pikmin_bloom_how_to.png',
            alt: 'how to use the Pikmin Bloom Decor Tracker'
        },
        {
            type: 'image',
            src: 'images/projects/pikmin_bloom_tracker_card.png',
            alt: 'Card view of the Pikmin Bloom Decor Tracker'
        },
        {
            type: 'image',
            src: 'images/projects/pikmin_bloom_tracker_list.png',
            alt: 'List view of the Pikmin Bloom Decor Tracker'
        }
    ],
    technologies: ["HTML", "CSS", "JavaScript", "API", "Firebase"],
    status: "Completed",
    date: "2025/12",
    image: "images/projects/pikmin_bloom_home.png",
    link: "https://maggie62755.github.io/Pikmin-Bloom-Decor-Tracker",
    sourceCode: "https://github.com/maggie62755/Pikmin-Bloom-Decor-Tracker"
};
