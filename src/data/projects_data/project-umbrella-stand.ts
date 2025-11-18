import type { ProjectBase } from './types';

export const smartUmbrellaStand: ProjectBase = {
    title: "Smart Umbrella Stand 智慧共享雨傘租借系統",
    description: "Smart Umbrella Stand allows you to rent an umbrella at any time anywhere and help you get rid of raining trouble from now and then.",
    detailedContent: [
        {
            type: 'heading',
            content: 'Introduction'
        },
        {
            type: 'paragraph',
            content:'Do you always encounter the situation of not bringing an umbrella on a rainy day?',
        },
        {
            type: 'paragraph',
            content:'Smart Umbrella Stand allows you to rent an umbrella at any time anywhere and help you get rid of raining trouble from now and then.'
        },
        {
            type: 'heading',
            content: 'Prototype'
        },
        {
            type: 'image',
            src: 'images/projects/smart_umbrella_stand_top.jpeg',
            alt: 'top view of the umbrella stand prototype'
        },
        {
            type: 'image',
            src: 'images/projects/smart_umbrella_stand_left.jpeg',
            alt: 'side view of the umbrella stand prototype'
        },
        {
            type: 'heading',
            content: 'Link'
        },{
            type: 'link',
            links: [
            { url: 'https://drive.google.com/file/d/1GU6CxIXmZ5ZHVF50reyQBTGDSaQ_pwQ-/view?usp=sharing',
                    text: 'Concept Video: Smart Umbrella Stand' },
            { url: 'https://docs.google.com/presentation/d/1UfX2_J8TtJqF7S1l39R1vV5vpbAy-1Wl/preview?rtpof=true&sd=true&slide=id.p1',
                    text: 'Slide: Smart Umbrella Stand' }
            ]
            
        }    
    ],
    technologies: ["C", "C++", "Python", "IoT", "Raspberry Pi 3", "MongoDB", "API"],
    status: "Completed",
    image: "images/projects/smart_umbrella_stand.jpeg",
    link: "https://github.com/maggie62755/Adaptive-MQTT-Transmit-Policy",
    sourceCode: "https://github.com/maggie62755/Adaptive-MQTT-Transmit-Policy"
};
