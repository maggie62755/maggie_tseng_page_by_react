export interface ProjectContent {
    type: 'paragraph' | 'image' | 'list' | 'heading' | 'link';
    content?: string;
    items?: string[];
    src?: string;
    alt?: string;
    // link 支援多個連結
    url?: string;
    text?: string;
    links?: { url: string; text?: string }[];
}

// 專案基本資料（不含 id）
export interface ProjectBase {
    title: string;
    description: string; // 用於卡片顯示的簡短描述
    detailedContent?: ProjectContent[]; // 用於 modal 的詳細內容
    technologies: string[];
    status: string;
    image: string;
    link: string;
    sourceCode?: string;
}

// 完整專案資料（含自動生成的 id）
export interface Project extends ProjectBase {
    id: number;
}
