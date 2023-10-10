# CheckCentral-Node

A Node.js client for the CheckCentral API.

## Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/flub71/checkcentral-node.git
   ```

2. Navigate to the project directory:
   ```bash
   cd checkcentral-node
   ```

3. Install the required dependencies:
   ```bash
   npm install
   ```

## Configuration

Before using the CheckCentral API client, you need to configure your environment:

1. Create a `.env` file in the root directory of the project.
2. Add the following line to the `.env` file:
   ```env
   CHECK_CENTRAL_READONLY_API_KEY=YOUR_API_KEY_HERE
   ```
   Replace `YOUR_API_KEY_HERE` with your actual CheckCentral API key.

## Usage

You can use the `CheckCentralAPI` class to interact with the CheckCentral API. The class provides methods to fetch overviews, checks, activities, check groups, dashboards, issues, permissions, reports, users, and user groups.

Example:

```typescript
import CheckCentralAPI from './path_to_your_file';

async function fetchAllChecks() {
    const checks = await CheckCentralAPI.getAllChecks();
    console.log(checks);
}

fetchAllChecks();
```

## API Methods

Here are the available methods in the `CheckCentralAPI` class:

- `getOverview()`: Fetches an overview.
- `getAllChecks(params: AllChecksParams)`: Fetches all checks based on the provided parameters.
- `getActivities(params: ActivitiesParams)`: Fetches activities based on the provided parameters.
- `getCheckGroups(params: CheckGroupsParams)`: Fetches check groups based on the provided parameters.
- `getDashboards(params: DashboardsParams)`: Fetches dashboards based on the provided parameters.
- `getIssues()`: Fetches all issues.
- `getPermissions(params: PermissionsParams)`: Fetches permissions based on the provided parameters.
- `generateReport(params: ReportParams)`: Generates a report based on the provided parameters.
- `getReports(params: ReportParams)`: Fetches reports based on the provided parameters.
- `getUsers(params: UsersParams)`: Fetches users based on the provided parameters.
- `getUserGroups(params: UserGroupsParams)`: Fetches user groups based on the provided parameters.


## Contributing

If you'd like to contribute to this project, please fork the repository and submit a pull request.

## License

This project is licensed under the MIT License.

```