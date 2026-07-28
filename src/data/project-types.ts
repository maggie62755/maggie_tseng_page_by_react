// 專案基本資料（不含 id）
export interface ProjectBase {
    title: string;
    description: string; // 用於卡片顯示的簡短描述
    content?: string; // 用於 modal 的詳細內容 (Markdown string)
    technologies: string[];
    status: string;
    date?: string; // 專案製作時間（年/月），例如 "2024/10" 或 "2024"
    image: string;
    link: string;
    sourceCode?: string;
}

// 完整專案資料（含自動生成的 id）
export interface Project extends ProjectBase {
    id: number;
}
