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
