## OpenAI ChatGPT Microservice

This template makes it easy to quickly get started building [NestJs](https://github.com/nestjs/nest) microservices that utilize the power of [OpenAI](https://openai.com) and [ChatGPT](https://openai.com/blog/chatgpt/), by providing a preconfigured set of modules and services. 

- REST API with [MongoDB](https://www.mongodb.com) support
- Swagger documentation, [Joi](https://github.com/hapijs/joi) validation
- Folder structure, code samples and best practices
- Crafted for Docker environments (Dockerfile support and environment variables)

## 1. Requirements

Before starting, make sure you have the minimum requirements on your workstation.

- An up-to-date release of NodeJS and Yarn (or npm)
- A MongoDb database (you may use the provided docker-compose file to create one).

## 2. Setup
2.1. Install the dependencies.

 ```bash
$ yarn
 ```

2.2. Make a copy of the example environment variables file.

On Linux systems:
```bash
$ cp .env.example .env
```
On Windows:
```powershell
$ copy .env.example .env
```

2.3. Configure your environment variables in the newly created `.env` file.

For a standard development configuration, you can use the default values and configure only the OpenAi and MongoDb variables. 

> You can find your OpenAI API key [here](https://beta.openai.com/account/api-keys) and the organization id [here](https://beta.openai.com/account/org-settings)

## 3. Run the app
```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

> You should now be able to access the swagger docs for the API at [http://localhost:3001](http://localhost:3001)

## 4. Roadmap

- [x] List Models
- [x] Text Completion
- [x] Code Completion
- [x] Image Generation
- [ ] Edit Image
- [ ] Model Fine Tuning
- [ ] Content Moderation

## 5. Stay in touch

- Author - [Alexandru Berce](https://www.linkedin.com/in/alexandruberce)
- Website - [https://devaccent.com](https://devaccent.com)

<a href="https://twitter.com/alexandruberce" target="_blank"><img src="https://img.shields.io/twitter/follow/alexandruberce.svg?style=social&label=Follow"></a>
