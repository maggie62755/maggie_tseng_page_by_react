export interface ProjectContent {
    type: 'paragraph' | 'image' | 'list' | 'heading';
    content?: string;
    items?: string[];
    src?: string;
    alt?: string;
}

export interface Project {
    id: number;
    title: string;
    description: string; // 用於卡片顯示的簡短描述
    detailedContent?: ProjectContent[]; // 用於 modal 的詳細內容
    technologies: string[];
    status: string;
    image: string;
    link: string;
    sourceCode?: string;
}

export const projectsData: Project[] = [
    {
        id: 1,
        title: "E-commerce Platform",
        description: "A full-stack e-commerce web application built with React, Node.js, and MongoDB. Features include user authentication, product catalog, shopping cart, and payment integration with Stripe. This project demonstrates modern web development practices including responsive design, secure authentication, and seamless payment processing.",
        technologies: ["React", "Node.js", "MongoDB", "Stripe API"],
        status: "Completed",
        image: "/api/placeholder/711/400",
        link: "#",
        sourceCode: "#"
    },
    {
        id: 2,
        title: "Network Management for Small and Medium-sized Businesses",
        description: "企業/組織用的網路設備管理與監控平台，支援多區域、多角色分區管理，提供豐富的網路拓撲視覺化、設備清單、用戶管理、內容過濾、流量分析等功能。",
        detailedContent: [
            {
                type: 'heading',
                content: '專案定位'
            },
            {
                type: 'paragraph',
                content: '企業/組織用的網路設備管理與監控平台，支援多區域、多角色（如 Secure/Employee/Guest）分區管理。提供豐富的網路拓撲視覺化、設備清單、用戶管理、內容過濾、流量分析等功能。'
            },
            {
                type: 'heading',
                content: '主要技術'
            },
            {
                type: 'list',
                items: [
                    'Next.js：用於伺服器端渲染與路由管理。',
                    'React：前端 UI 框架，採用 hooks 與 function component。',
                    'TypeScript：靜態型別，提升開發安全性與維護性。',
                    'Ant Design：UI 元件庫，提供一致的設計風格。',
                    'Recharts：資料視覺化（如流量、登入統計等圖表）。',
                    'React Query：資料快取與 API 狀態管理。',
                    'Tailwind CSS：快速設計響應式 UI。',
                    'D3.js：網路拓撲圖的互動式視覺化。'
                ]
            },
            {
                type: 'heading',
                content: '主要功能模組'
            },
            {
                type: 'list',
                items: [
                    '設備管理（Devices Management）：顯示、搜尋、篩選、詳情檢視所有連線設備。',
                    '網路拓撲（Network Topology）：以圖形方式呈現網路設備間的連線關係，支援分區、拖曳、縮放、即時狀態顯示。',
                    '用戶/群組管理：支援多角色、多群組的用戶管理與權限分配。',
                    '內容過濾（Smart Content Filter）：可針對不同群組設定封鎖網站類別。',
                    '流量/威脅/速度分析：多種圖表與報表，協助管理者掌握網路使用狀況與安全威脅。',
                    '帳號與權限管理：支援帳號刪除、權限調整等操作。',
                    '多語系、多主題支援：可切換主題與語言。'
                ]
            },
            {
                type: 'heading',
                content: '專案結構'
            },
            {
                type: 'list',
                items: [
                    'app：各大功能頁面與子模組（如 network, devices, shield, employee-zone, guest-zone 等）。',
                    'components：共用 UI 元件（如 Table、Card、Drawer、Header 等）。',
                    'context：React Context 管理全域狀態（如 DataContext、AuthContext）。',
                    'services：API 請求、資料查詢 hooks、常數與型別定義。',
                    'utils：工具函式（如資料轉換、格式化、下載等）。',
                    'assets：樣式、圖示、色彩設定。',
                    'modules：複雜功能模組（如流量分布圖、設備詳情、彈窗等）。',
                    'public：靜態資源（圖片、favicon 等）。'
                ]
            },
            {
                type: 'heading',
                content: '特色'
            },
            {
                type: 'list',
                items: [
                    '支援多區域（Zone）切換與分權管理。',
                    '互動式網路拓撲圖，結合 D3 與 React。',
                    '高度模組化、可維護性佳，型別安全。',
                    '具備自動資料更新、即時監控能力。',
                    'UI/UX 現代化，適合企業 IT 管理人員日常操作。'
                ]
            }
        ],
        technologies: ["TypeScript", "React", "Firebase", "Material-UI"],
        status: "In Progress",
        image: "/images/projects/genix_biz_home.png",
        link: "#"
    },
    {
        id: 3,
        title: "Weather Dashboard",
        description: "A beautiful weather dashboard that displays current weather conditions and forecasts for multiple cities using OpenWeatherMap API. Features include interactive charts, geolocation support, and responsive design.",
        
        technologies: ["JavaScript", "CSS3", "Weather API", "Chart.js"],
        status: "Completed",
        image: "/api/placeholder/711/400",
        link: "#",
        sourceCode: "#"
    },
    {
        id: 4,
        title: "多時段 MAC 地址行為相似度分析與隨機 MAC 合併工具",
        description: "本專案旨在開發一套工具，用於分析多時段內 MAC 地址的行為相似度，透過數據分析技術，協助用戶識別相似行為模式，協助推論哪些 MAC 屬於同一實體設備，提升網路管理效率。",
        detailedContent: [
            {
                type: 'heading',
                content: '專案概述'
            },
            {
                type: 'paragraph',
                content: '本專案旨在開發一套工具，用於分析多時段內 MAC 地址的行為相似度，透過數據分析技術，協助用戶識別相似行為模式，協助推論哪些 MAC 屬於同一實體設備，提升網路管理效率。'
            },
            {
                type: 'heading',
                content: '流程'
            },
            {
                type: 'list',
                items: [
                    '資料分段：根據 MAC 改變時間，將資料分為歷史段與新段，分別處理',
                    '特徵萃取：從 records、devices 等資料中萃取設備特徵（如連線時間、流量、應用分布、RSSI、廠牌等）',
                    '多維度相似度計算：針對每對歷史 MAC 與新 MAC，計算多種特徵的相似度分數，並可調整各特徵權重',
                    '結果輸出：輸出所有比對分數與最佳配對結果，最佳配對結果及有高機率為同一實體設備'
                ]
            },
            {
                type: 'image',
                src: 'public/images/projects/mac_sim.png',
                alt: '流程圖'
            },
            {
                type: 'paragraph',
                content: '此流程可有效協助網路管理者或研究人員追蹤同一設備在啟用隨機 MAC 後的行為變化，並提升設備識別的準確度。'
            },
            {
                type: 'heading',
                content: '特徵提取'
            },
            {
                type: 'paragraph',
                content: '針對每個 MAC，從其 records（行為紀錄）中提取多種特徵，包括：'
            },
            {
                type: 'list',
                items: [
                    '小時活躍模式（hourly）：一天 24 小時的流量分布',
                    '星期模式（weekday）：一週 7 天的流量分布',
                    '流量比例特徵（traffic）：上下行比例、平均流量等',
                    '應用分布（app）：Top 20 應用的流量占比',
                    '內容分類分布（category）：Top 15 分類的流量占比',
                    'URL 模式（url）：常訪問的 Top 30 URL 集合'
                ]
            },
            {
                type: 'heading',
                content: '各特徵相似度計算'
            },
            {
                type: 'list',
                items: [
                    '小時活躍/星期模式：用直方圖交集（histogram intersection），衡量兩 MAC 在時間分布上的重疊程度。',
                    '流量比例特徵：比較上下行比例、平均流量等，使用對數差異轉換為相似度分數。',
                    '應用/分類分布：將流量分布視為向量，計算餘弦相似度。',
                    'URL 模式：用 Jaccard 相似度（交集/聯集）比較常訪問的 URL 集合。'
                ]
            },
            {
                type: 'heading',
                content: '加權總分'
            },
            {
                type: 'list',
                items: [
                    '每個特徵有一個預設權重（可自訂），如 hourly 0.2、traffic 0.2、app 0.25 等。',
                    '若某特徵無法計算（如資料不足），該特徵權重會被設為 0，其他特徵權重會重新正規化（加總為 1）。',
                    '總分 = 各特徵分數 × 權重，加總後得到 0~1 之間的分數。'
                ]
            },{
                type: 'image',
                src: "/images/projects/mac_sim_result.png",
                alt: 'MAC行為相似度分析結果範例'
            }
        ],
        technologies: ["Python", "Pandas", "NumPy", "Scikit-learn"],
        status: "Completed",
        image: "public/images/projects/mac_sim_title.png",
        link: "#",
        sourceCode: "#"
    }
];
