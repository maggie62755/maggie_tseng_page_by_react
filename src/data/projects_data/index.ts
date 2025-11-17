// 匯出型別
export type { Project, ProjectBase, ProjectContent } from './types';

import { planetaryTourism } from './project-planetary-tourism';
// 匯入所有專案
import { ecommercePlatform } from './project-ecommerce';
import { networkManagement } from './project-network-mgmt';
import { weatherDashboard } from './project-weather';
import { macAnalysis } from './project-mac-analysis';
import { maggieThesis } from './project-maggie-thesis';
import { smartUmbrellaStand } from './project-umbrella-stand';
import type { ProjectBase, Project } from './types';

// 自動分配 id 的輔助函數
function assignIds(projects: ProjectBase[]): Project[] {
    return projects.map((project, index) => ({
        ...project,
        id: index + 1
    }));
}

// 專案列表（不含 id）
const projectsList: ProjectBase[] = [
    maggieThesis,
    smartUmbrellaStand,
    networkManagement,
    weatherDashboard,
    macAnalysis,
    planetaryTourism
];

// 匯出所有專案陣列（自動分配 id）
export const projectsData: Project[] = assignIds(projectsList);

// 也可以個別匯出，方便單獨使用
export {
    maggieThesis,
    smartUmbrellaStand,
    ecommercePlatform,
    networkManagement,
    weatherDashboard,
    macAnalysis,
    planetaryTourism
};
