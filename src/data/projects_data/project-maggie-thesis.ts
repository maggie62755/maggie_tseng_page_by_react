import type { ProjectBase } from '../project-types';

export const maggieThesis: ProjectBase = {
    title: "Cloud MQTT Broker Design for Heterogeneous-Message-Flow Applications",
    description: "This project is a new transmit policy which design for MQTT communication protocol. The new design is implement on mosuqitto, an open source MQTT implementation. Excepct the broker, you can use implementation of MQTT to run your client.",
    detailedContent: [
        {
            type: 'heading',
            content: 'Introduction'
        },
        {
            type: 'list',
            items: [
                'The number of the Internet of Things (IoT) devices grow rapidly, and lots of data exchange between them involve heterogeneous communications.',
                'MQTT is a lightweight communication that is suitable for IoT.',
                'The brokers are needed in the cloud because of the large-scale applications.'
            ]
        },
        {
            type: 'heading',
            content: 'Problem Analysis'
        },
        {
            type: 'list',
            items: [
                'Cloud broker needs to bear a large number of different sizes packets.',
                'Because of the far transmit distance, the huge amount, and the large size of the packet, the risk of packet loss increases.',
                'The original MQTT broker lacks network awareness.'
            ]
        },
        {
            type: 'heading',
            content: 'Project Contributions'
        },
        {
            type: 'list',
            items: [
                'Design and implement a forwarding policy to choose a better moment to forward the packet with higher loss risk out of the broker.',
                'Propose a solution to address the issue of memory usage increase in the broker when it is busy.'
            ]
        },
        {
            type: 'heading',
            content: 'Proposed Design of Delay Forwarding Policy'
        },
        {
            type: 'list',
            items: [
                'The proposed design classifies the packet by its payload size.',
                'By using MQTT QoS 1 to transmit additional packets, the network state can be detected.'
            ]
        },
        {
            type: 'heading',
            content: 'Slide'
        },{
            type: 'link',
            url: 'https://drive.google.com/file/d/1afLLRTeT9JnAiyiy8UAQ2JhGFOhzCDgV/view?usp=sharing',
            text: 'Slide: Cloud MQTT Broker Design for Heterogeneous-Message-Flow Applications'
        }       
    ],
    technologies: ["C", "C++", "MQTT", "Mosquitto"],
    status: "Completed",
    date: "2022/06",
    image: "images/projects/maggie_thesis.png",
    link: "https://github.com/maggie62755/Adaptive-MQTT-Transmit-Policy",
    sourceCode: "https://github.com/maggie62755/Adaptive-MQTT-Transmit-Policy"
};
