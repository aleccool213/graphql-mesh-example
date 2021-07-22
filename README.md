# graphql-mesh-example

> This is me mostly messing with graphql-mesh to see what it is capable of. This is a great tool for demonstrating the power of GraphQL and having a graph based schema format.

This sample app imagines if someone wanted to create a Space Flight journal. You can choose SpaceX launches from a list and mark the ones you attended.

This repo connects two data sources, one GraphQL API from the [SpaceX GraphQL API](https://api.spacex.land/graphql/) and a local Mongo Database running in Docker.

Using graphql-mesh, both data sources are automatically transformed into a single GraphqlAPI. A client application (e.g. browser) could connect with this API and be able to query for Past Launches (SpaceX API) with:

```graphql
query PastLaunches {
  launchesPast(limit: 10) {
    mission_name
    id
    launch_date_local
  }
}
```

Create a user (locally stored in the Mongo Database) with:

```graphql
mutation CreateUser($input: CreateOneUserInput!) {
  userCreateOne(record: $input) {
    recordId
  }
}
```

Mark a Launch (locally stored in a Mongo Database) as attended with:

```graphql
mutation LaunchesAttendedCreateOne($input: CreateOneLaunchesAttendedInput!) {
  launchesAttendedCreateOne(record: $input) {
    record {
      spacexLaunchID
      userId
    }
  }
}
```

Get all launches attended:

```graphql
query LaunchesAttended {
  launchesAttendedFindMany {
    spacexLaunchID
    userId
  }
}
```

## installation

1. Install and run Docker Desktop
2. Pull and Build the Docker containers with `docker-compose build`
3. Install nvm and run `nvm use` to set the Node version
4. Install the Node app deps with `npm install`

## Usage

> Docker should be running on your desktop

### Run the MongoDB Database in the background

`docker-compose up mongo`

### Run the app locally

`npm run start`
