import type { Project } from './types';

export const macAnalysis: Project = {
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
            src: '/images/projects/mac_sim.png',
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
        },
        {
            type: 'image',
            src: "/images/projects/mac_sim_result.png",
            alt: 'MAC行為相似度分析結果範例'
        }
    ],
    technologies: ["Python", "Pandas", "NumPy", "Scikit-learn"],
    status: "Completed",
    image: "/images/projects/mac_sim_title.png",
    link: "#",
    sourceCode: "#"
};
