# Dev Locator

Dev Locator is an application that allows users to easily find and connect with fellow devs by location using [GitHub's search API](https://docs.github.com/en/rest/reference/search)

## Features

### Current

- Search GitHub users by location
- View total amount of GitHub users at the queried location
- Navigate search results through a paginated list
- Search results display GitHub username, profile picture, and a link to their GitHub page

### In development

- Display amount of queries available within GitHub's search API rate limit
- Allow users to fetch a specific search results detailed information (bio, followers, following, total stars, etc.)
- Store previous page results in a proxy state using Valtio

## Style, Design, And Architecture

### Preview

![preview](https://user-images.githubusercontent.com/74286884/151723427-5c566fe3-5540-4cec-953b-a16f067540ff.png)

### Built With

  - [TypeScript](https://www.typescriptlang.org/) 
  - [React](https://reactjs.org/)
  - [Tailwind CSS](https://tailwindcss.com/)
  - [Valtio](https://github.com/pmndrs/valtio)

## Development Contributors:

These instructions will give you a copy of the project up and running on
your local machine for development and testing purposes.

### Prerequisites

- Node v16 or higher
- [Yarn](https://yarnpkg.com/)

### Running locally
- Clone repo
    - `git clone https://github.com/wil-gerard/dev-locator.git`
- Install dependencies
    - `yarn`
- Navigate to the root directory in your terminal and then
    - `yarn start`

## License

MIT License - see the [LICENSE.md](LICENSE.md) file for details
