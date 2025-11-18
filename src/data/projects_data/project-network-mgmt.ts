import type { ProjectBase } from './types';

export const networkManagement: ProjectBase = {
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
    technologies: ["Next.js", "React", "TypeScript", "Ant Design", "D3.js"],
    status: "In Progress",
    image: "images/projects/genix_biz_home.png",
    link: "#"
};
