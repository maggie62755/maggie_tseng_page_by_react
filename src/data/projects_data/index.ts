// 匯出型別
export type { Project, ProjectBase, ProjectContent } from '../project-types';

import type { ProjectBase, Project } from '../project-types';

// 自動匯入所有專案檔案（排除 types.ts 和 index.ts）
const projectModules = import.meta.glob<{ [key: string]: ProjectBase }>('./project-*.ts', { eager: true });

// 自動分配 id 的輔助函數
function assignIds(projects: ProjectBase[]): Project[] {
    return projects.map((project, index) => ({
        ...project,
        id: index + 1
    }));
}

// 從所有模組中提取專案資料
const projectsList: ProjectBase[] = Object.values(projectModules).flatMap(module => 
    Object.values(module).filter((value): value is ProjectBase => 
        typeof value === 'object' && value !== null && 'title' in value
    )
);

// 匯出所有專案陣列（自動分配 id）
export const projectsData: Project[] = assignIds(projectsList);
