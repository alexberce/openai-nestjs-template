## OpenAI ChatGPT Microservice

This template makes it easy to quickly get started building [NestJs](https://github.com/nestjs/nest) microservices that utilize the power of [OpenAI](https://openai.com) and [ChatGPT](https://openai.com/blog/chatgpt/), by providing a preconfigured set of modules and services. 

## Prerequisites

```text
- yarn (or npm)
- Docker (with docker-compose)
```

## Setup
1. Install the dependencies.

    ```bash
    $ yarn
    ```

2. Make a copy of the example environment variables file.

   On Linux systems:
   ```bash
   $ cp .env.example .env
   ```
   On Windows:
   ```powershell
   $ copy .env.example .env
   ```

3. Add your `API key` and `organization id` to the newly created `.env` file.
    > You can find the API key [here](https://beta.openai.com/account/api-keys) and the organization id [here](https://beta.openai.com/account/org-settings)

## Run the app
```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

> You should now be able to access the swagger docs for the API at [http://localhost:3001](http://localhost:3001)

## Tasks

- [x] List Models
- [x] Text Completion
- [x] Code Completion
- [x] Image Generation
- [ ] Edit Image
- [ ] Fine Tuning
- [ ] Content Moderation
