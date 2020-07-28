# Wookie Movies Test

This test is adapted from CodeSubmit.

## Test Description

Your are the owner of a movie theater - "Wookie". Your customers want to explore all the movies in a convenient way. Please build a website for them. There are some sample design you could refer to under `/Design`. Please complete as many of the following tasks as possible. You can complete the tasks in any order you wish.

### Tasks

-   Implement your designs using **React 16 functional components and hooks** (or React+Redux if not familiar with React 16) and style them using **CSS3**
-   Write your code preferrably in **TypeScript**
-   Use the `movies.json` file to implement a REST API backend in nodeJS (you can use the [nestjs](https://nestjs.com/) framework for boilerplate and modules) to get all the movies.
-   Parse the API response and display the results as outlined in the design. **Group movies by category**.
-   Implement a detail view for the movies in the list
-   Make sure that bookmarking / linking to detail pages works as expected
-   Implement fulltext Elastic search to search based on movie Name, Director and Genre
    - Write a script for creating the Elastic search index for reproducibility
-   You may use any state management library of your choice as well as common routing libraries

## Evaluation Criteria

-   Design implemented according to attached files using React Components
-   Routing implemented (list, detail) + bookmarking
-   Connect to API - Movies retrieved, JSON parsed, grouped by category
-   Connecting to API Search, search functionality is working

## Bootstrap folder

You could either start your project from scratch or using the web-app-bootstrap folder with Material UI

## Progress

Please commit and push to the `develop` branch regularly throughout the day.
Ensure your commits have clear commit messages and are atomic, working independently of another.

## Completion

Please organize, design, test and document your code as if it were
going into production - then push open a Merge Request to the master branch.

## Bonus/Advanced tasks
  - Convert your react application into a ready to be run Docker image
  - Build a docker compose file and configure your application
  - Add filtering and sorting by movie rating

## Required tools and useful link or commands

* Yarn/NPM

* To create a typescript project with react-app
    ```
    yarn create react-app wookie-movie --typescript
    ```

* To install redux (if not using React 16)
    ```
    yarn add @types/react-redux
    yarn add @types/redux-logger
    yarn add redux
    ```

* [React documentation](https://reactjs.org/docs/getting-started.html).
* Web extensions
    * [React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)
    * [Redux Devtools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd)

