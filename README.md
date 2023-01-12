## Description

[NestJs](https://github.com/nestjs/nest) Microservice Template

## Installation
```bash
$ yarn
```

## Start the app
```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

## Swagger docs

You can find the Swagger docs at the following URL
```text
http://localhost:3001
```

## Features

- JWT Authentication
```
@Get('me')
@UseGuards(JwtAuthGuard)
async fetchCurrentUser(): Promise<User> {}
```
- Role-based Authorization
```
@Delete(':id')
@UseGuards(JwtAuthGuard, UserRoleGuard(EUserRole.Admin))
async deleteUserById(...): Promise<void> {...}
```
