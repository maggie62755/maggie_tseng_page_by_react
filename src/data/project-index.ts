// 匯出型別
export type { Project, ProjectBase } from './project-types';

import type { ProjectBase, Project } from './project-types';
import frontMatter from 'front-matter';

// 自動匯入 projects_data 資料夾中所有 .md 檔案（以字串形式）
const projectModulesRaw = import.meta.glob('./projects_data/*.md', { 
    query: '?raw', 
    import: 'default',
    eager: true 
});

// 自動分配 id 的輔助函數
function assignIds(projects: ProjectBase[]): Project[] {
    return projects.map((project, index) => ({
        ...project,
        id: index + 1
    }));
}

// 從所有 markdown 模組中提取專案資料
const projectsList: ProjectBase[] = Object.values(projectModulesRaw)
    .map((rawContent: any) => {
        // rawContent 應該是 string
        const parsed = frontMatter<ProjectBase>(rawContent as string);
        return {
            ...parsed.attributes,
            content: parsed.body
        };
    })
    .sort((a, b) => {
        // 沒有 date 的排在最後
        if (!a.date) return 1;
        if (!b.date) return -1;
        // 依照 date 降序排列（最新的在前）
        return b.date.localeCompare(a.date);
    });

// 匯出所有專案陣列（自動分配 id）
export const projectsData: Project[] = assignIds(projectsList);
