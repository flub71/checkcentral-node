import axios from "axios";

const BASE_URL = "https://api.checkcentral.cc";

interface AllChecksParams {
    checkId?: number;
    checkName?: string;
    activityCount?: number;
    includePendingOverdue?: boolean;
    includeSettings?: boolean;
}

interface ActivitiesParams {
    groupId?: number;
    checkId?: number;
    status?: string;
    matched?: boolean;
    sources?: string[] | string;
    startDate?: string;
    endDate?: string;
    activityCount?: number;
}

interface CheckGroupsParams {
    groupId?: number;
    groupName?: string;
    includeChecks?: boolean;
    includeSettings?: boolean;
}

interface DashboardsParams {
    dashboardId?: number;
    dashboardName?: string;
}

interface PermissionsParams {
    checkGroupId?: number;
    checkGroupName?: string;
    userId?: number;
    userEmail?: string;
    userGroupId?: number;
    userGroupName?: string;
}

interface ReportParams {
    reportId?: number;
    reportName?: string;
}

interface UsersParams {
    userId?: number;
    userEmail?: string;
}

interface UserGroupsParams {
    userGroupId?: number;
    userGroupName?: string;
}

class CheckCentralAPI {
    private readonly apiToken: string;

    constructor(apiKey: string) {
        this.apiToken = apiKey;
    }
    async getOverview(): Promise<any> {
        try {
            const response = await axios.get(
                `${BASE_URL}/getOverview/?apiToken=${this.apiToken}`
            );
            return response.data;
        } catch (error) {
            console.error("Error fetching overview:", error);
            throw error;
        }
    }

    async getAllChecks(params: AllChecksParams): Promise<any> {
        try {
            const queryParams = new URLSearchParams(params as any);
            const response = await axios.get(
                `${BASE_URL}/getChecks/?apiToken=${this.apiToken}&${queryParams.toString()}`
            );
            return response.data;
        } catch (error) {
            console.error("Error fetching all checks:", error);
            throw error;
        }
    }

    async getActivities(params: ActivitiesParams): Promise<any> {
        try {
            const queryParams = new URLSearchParams(params as any);
            const response = await axios.get(
                `${BASE_URL}/getActivities/?apiToken=${this.apiToken}&${queryParams.toString()}`
            );
            return response.data;
        } catch (error) {
            console.error("Error fetching activities:", error);
            throw error;
        }
    }

    async getCheckGroups(params: CheckGroupsParams): Promise<any> {
        try {
            const queryParams = new URLSearchParams(params as any);
            const response = await axios.get(
                `${BASE_URL}/getCheckGroups/?apiToken=${this.apiToken}&${queryParams.toString()}`
            );
            return response.data;
        } catch (error) {
            console.error("Error fetching check groups:", error);
            throw error;
        }
    }

    async getDashboards(params: DashboardsParams): Promise<any> {
        try {
            const queryParams = new URLSearchParams(params as any);
            const response = await axios.get(
                `${BASE_URL}/getDashboards/?apiToken=${this.apiToken}&${queryParams.toString()}`
            );
            return response.data;
        } catch (error) {
            console.error("Error fetching dashboards:", error);
            throw error;
        }
    }

    async getIssues(): Promise<any> {
        try {
            const response = await axios.get(
                `${BASE_URL}/getIssues/?apiToken=${this.apiToken}`
            );
            return response.data;
        } catch (error) {
            console.error("Error fetching issues:", error);
            throw error;
        }
    }

    async getPermissions(params: PermissionsParams): Promise<any> {
        try {
            const queryParams = new URLSearchParams(params as any);
            const response = await axios.get(
                `${BASE_URL}/getPermissions/?apiToken=${this.apiToken}&${queryParams.toString()}`
            );
            return response.data;
        } catch (error) {
            console.error("Error fetching permissions:", error);
            throw error;
        }
    }

    async generateReport(params: ReportParams): Promise<any> {
        try {
            const queryParams = new URLSearchParams(params as any);
            const response = await axios.get(
                `${BASE_URL}/generateReport/?apiToken=${this.apiToken}&${queryParams.toString()}`
            );
            return response.data;
        } catch (error) {
            console.error("Error generating report:", error);
            throw error;
        }
    }

    async getReports(params: ReportParams): Promise<any> {
        try {
            const queryParams = new URLSearchParams(params as any);
            const response = await axios.get(
                `${BASE_URL}/getReports/?apiToken=${this.apiToken}&${queryParams.toString()}`
            );
            return response.data;
        } catch (error) {
            console.error("Error fetching reports:", error);
            throw error;
        }
    }

    async getUsers(params: UsersParams): Promise<any> {
        try {
            const queryParams = new URLSearchParams(params as any);
            const response = await axios.get(
                `${BASE_URL}/getUsers/?apiToken=${this.apiToken}&${queryParams.toString()}`
            );
            return response.data;
        } catch (error) {
            console.error("Error fetching users:", error);
            throw error;
        }
    }

    async getUserGroups(params: UserGroupsParams): Promise<any> {
        try {
            const queryParams = new URLSearchParams(params as any);
            const response = await axios.get(
                `${BASE_URL}/getUserGroups/?apiToken=${this.apiToken}&${queryParams.toString()}`
            );
            return response.data;
        } catch (error) {
            console.error("Error fetching user groups:", error);
            throw error;
        }
    }
}

export default CheckCentralAPI;