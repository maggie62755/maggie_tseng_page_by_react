// 匯出型別
export type { Project, ProjectBase } from '../project-types';

import type { ProjectBase, Project } from '../project-types';
import frontMatter from 'front-matter';

// 自動匯入所有專案檔案（以字串形式）
const projectModules = import.meta.glob('./project-*.md', { query: '?raw', import: 'default', eager: true });

// 自動分配 id 的輔助函數
function assignIds(projects: ProjectBase[]): Project[] {
    return projects.map((project, index) => ({
        ...project,
        id: index + 1
    }));
}

// 從所有 markdown 模組中解析資料
const projectsList: ProjectBase[] = Object.values(projectModules).map((rawContent: any) => {
    // rawContent 應該是 string
    const parsed = frontMatter<ProjectBase>(rawContent as string);
    return {
        ...parsed.attributes,
        content: parsed.body
    };
});

// 匯出所有專案陣列（自動分配 id）
export const projectsData: Project[] = assignIds(projectsList);
