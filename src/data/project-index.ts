// 匯出型別
export type { Project, ProjectBase, ProjectContent } from './project-types';

import type { ProjectBase, Project } from './project-types';

// 自動匯入 projects_data 資料夾中所有 .ts 檔案（使用具名匯出）
const projectModulesNamed = import.meta.glob<{ [key: string]: ProjectBase }>('./projects_data/*.ts', { 
    eager: true 
});

// 自動分配 id 的輔助函數
function assignIds(projects: ProjectBase[]): Project[] {
    return projects.map((project, index) => ({
        ...project,
        id: index + 1
    }));
}

// 從所有模組中提取專案資料（排除 types.ts）
const projectsList: ProjectBase[] = Object.entries(projectModulesNamed)
    .filter(([path]) => !path.includes('types.ts') && !path.includes('index.ts'))
    .flatMap(([, module]) => 
        Object.values(module).filter((value): value is ProjectBase => 
            typeof value === 'object' && value !== null && 'title' in value
        )
    )
    .sort((a, b) => {
        // 沒有 date 的排在最後
        if (!a.date) return 1;
        if (!b.date) return -1;
        // 依照 date 降序排列（最新的在前）
        return b.date.localeCompare(a.date);
    });

// 匯出所有專案陣列（自動分配 id）
export const projectsData: Project[] = assignIds(projectsList);
