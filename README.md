# Instagram Stories Analyzer

## Description

ISA is an API designed to facilitate the analysis of Instagram story viewers, providing insights into your story audience. Currently, it offers functionality for analyzing story viewers who aren't following you back, with plans to expand to analyze followers and unfollowers in the future.

## Functionality

Users authenticate by logging in with their Instagram credentials, generating a secure token necessary for API requests. While currently lacking endpoints, upcoming ones will include /stories, /stories/:story_id, /publications, /publications/:publication_id, and more.

### Next feature:
- Login with instagram credentials
- List your stories
- Analyze the viewers of a story

## Data Access

Utilizing the instagram-private-api package, the API connects to Instagram. Presently, there are no defined limitations on data access.

## Audience

ISA targets all Instagram users seeking insights into their followers' behaviors and interactions on the platform.

## Features

At present, the API primarily focuses on providing insights into story viewers. Future updates may introduce additional features for analyzing follower demographics and engagement metrics.

## Security & Privacy

ISA prioritizes user security by not storing passwords. Instead, it generates and encrypts user tokens, securely storing them in an AWS vault.

## Integrations

At this stage, integrations with other platforms are not in consideration. The primary goal is to create a backend to consume Instagram's API and generate user-friendly data for analysis.

## Documentation & Support

Although not available currently, future plans include comprehensive documentation using Swagger. While direct support might not be immediate, feedback and comments are encouraged for future feature enhancements.

## Updates & Maintenance

The project is maintained as a passion project, with periodic updates for feature enhancements based on community feedback and suggestions.

## License

ISA is released under the MIT license, allowing for open usage and modification by the community.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Collaborate

This is an open project and you can collaborate by sending a PR to the project

## Stay in touch

- Author - [Jorge Mariel](https://jorgemariel.com)
