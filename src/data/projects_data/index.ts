// 匯出型別
export type { Project, ProjectContent } from './types';

// 匯入所有專案
import { ecommercePlatform } from './project1-ecommerce';
import { networkManagement } from './project2-network-mgmt';
import { weatherDashboard } from './project3-weather';
import { macAnalysis } from './project4-mac-analysis';

// 匯出所有專案陣列
export const projectsData = [
    ecommercePlatform,
    networkManagement,
    weatherDashboard,
    macAnalysis
];

// 也可以個別匯出，方便單獨使用
export {
    ecommercePlatform,
    networkManagement,
    weatherDashboard,
    macAnalysis
};
