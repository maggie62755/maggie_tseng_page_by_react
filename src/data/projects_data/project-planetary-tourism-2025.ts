import type { ProjectBase } from '../project-types';

export const planetaryTourism2025: ProjectBase = {
    title: "Planetary Tourism Office",
    description: "一個模擬太空旅遊的簡單網頁遊戲，讓使用者用蛇梯棋的方式遊玩，在遊戲中了解太空的相關知識。",
    detailedContent: [
        {
            type: 'heading',
            content: '製作動機'
        },
        {
            type: 'paragraph',
            content: '發想來自於過去參加黑克松競賽時的專案。當時因為比賽限時48小時的，有很多功能沒辦法完善。開始工作後逐漸有增加一些寫網頁的經驗，進而想到可以把這個專案改進，讓UI/UX更加完善，提升使用者體驗。'
        },
        {
            type: 'heading',
            content: 'Demo 網站'
        },{
            type: 'link',
            url: 'https://maggie62755.github.io/pto2025/',
            text: '試玩網站!'
        },
        {
            type: 'heading',
            content: 'ScreenShots'
        },
        {
            type: 'image',
            src: 'images/projects/planetary-tourism-2025-login.png',
            alt: 'Login page of the planetary tourism 2025'
        },
        {
            type: 'image',
            src: 'images/projects/planetary-tourism-2025-game.png',
            alt: 'Gameboard page of the planetary tourism 2025'
        },
        {
            type: 'image',
            src: 'images/projects/planetary-tourism-2025-des.png',
            alt: 'Activity description of the planetary tourism 2025'
        },
        {
            type: 'image',
            src: 'images/projects/planetary-tourism-2025-game-over.png',
            alt: 'Game over of the planetary tourism 2025'
        },
        {
            type: 'heading',
            content: '特別感謝'
        },{
            type: 'paragraph',
            content: '特別感謝所有參與黑克松競賽的夥伴們，還有越來越進步的AI。'
        }
    ],
    technologies: ["JS", "TS", "CSS", "REACT", "HTML", "Copilot"],
    status: "Completed",
    image: "images/projects/planetary-tourism-2025-game.png",
    link: "https://maggie62755.github.io/pto2025/",
    sourceCode: "#",
    date: "2025/12"
};
