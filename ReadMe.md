# CheckCentral-Node

A robust and intuitive Node.js client for interacting with the CheckCentral API. Seamlessly fetch overviews, checks, activities, dashboards, and more with minimal setup.

## Installation

Install the package via npm:

```bash
npm install checkcentral-node
```

## Configuration

Before using the CheckCentral API client, you need to configure your environment:

1. Create a `.env` file in the root directory of your project.
2. Add the following line to the `.env` file:
   ```env
   CHECK_CENTRAL_READONLY_API_KEY=YOUR_API_KEY_HERE
   ```
   Replace `YOUR_API_KEY_HERE` with your actual CheckCentral API key.

## Usage

After installation, you can use the `CheckCentralAPI` class in your project:

```typescript
import CheckCentralAPI from 'checkcentral-node';

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

If you'd like to contribute or have any issues/suggestions, please submit an issue or pull request on the GitHub repository.

## License

This project is licensed under the MIT License.