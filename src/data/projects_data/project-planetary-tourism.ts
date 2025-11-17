import type { ProjectBase } from './types';

export const planetaryTourism: ProjectBase = {
    title: "Planetary Tourism Office",
    description: "一個模擬太空旅遊的簡單網頁遊戲，讓使用者用蛇梯棋的方式遊玩，在遊戲中了解太空的相關知識。",
    detailedContent: [
        {
            type: 'heading',
            content: '製作動機'
        },
        {
            type: 'paragraph',
            content: '在網路上看到NASA舉辦的黑客松競賽，當時處於畢業與找工作間的空窗期，決定參加比賽來試試看。題目為太空旅遊，希望可以透過任何方式，發揮想像力創造出一個太空旅遊的體驗。此項比賽的限制是要在48小時內完成作品，並上傳。時間的限制讓這項比賽更加有挑戰。'
        },
        {
            type: 'heading',
            content: '專案介紹'
        },
        {
            type: 'paragraph',
            content: '一開始在發想時，因為太空旅遊現今還不存在所以花了許多時間做功課、找資料。決定好幾個旅遊行程後我們開始討論呈現方式。我們思考了太空中有的東西，想到了常見的隕石和黑洞，若是在空太旅遊中被隕石砸中或是被黑洞吸入都會有機會改變旅程的路徑。這讓我們聯想到了蛇梯棋。於是我們決定用一個類似蛇梯棋的遊戲來呈現太空旅遊的體驗。'
        },
        {
            type: 'heading',
            content: 'Demo 說明影片'
        },{
            type: 'link',
            url: 'https://www.youtube.com/watch?v=SQ_4puAXu7g',
            text: 'YouTube Demo 影片'
        },
        {
            type: 'heading',
            content: '獎項'
        },{
            type: 'paragraph',
            content: '此專案在NASA舉辦的黑客松競賽中獲得了「2024年黑客松競賽佳作」。'
        }
    ],
    technologies: ["JS", "HTML"],
    status: "Completed",
    image: "public/images/projects/planetary-tourism.png",
    link: "https://choutw.github.io/pto2023/login",
    sourceCode: "#"
};
