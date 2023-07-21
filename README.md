# Per Diem challenge

This is a [Next.js] and bootstrapped with [npx create-next-app@latest](https://nextjs.org/docs/getting-started/installation)

# the Per Diem Store Register challenge

## Welcome! 👋

This is a solution to the Gym Traning. The Gym challenge help us to improve our front-end skills by building realistic projects.
In this exercise, we will use React and tailwindcss.

## Content

- [auth-system-app](#)
- [Welcome! 👋](#)
- [The App description](#)
- [Screenshot](#screenshot)
- [My Steps](#steps)
- [Run the app locally](#development)

### The App description

auth-system-app




### Screenshot

![login - desktop-page](./login.png)
![signup - desktop-page](./signup.png)
![authenticated - desktop-page](./authenticated.png)

## My process

- Next.js
- Tailwind
- Mobile-first workflow

## Steps

- [x] create login page ui
- [x] create sign page ui
- [x] create authentication ui
- [x] implement authentication endpoint (`api/auth`)
- [x] implement user registration endpoint business logic (`api/user`)
- [x] implement getStore, I am days and time schedule endpoint (`api/store/id` and `api/time/id`)
- [ ] write end to end test with cypress

## Run the app locally

### Setup

1. Clone the repo on into a public Github repository [https://github.com/gracebir/auth-system-app](https://github.com/gracebir/auth-system-app) by running in you terminal:

```sh
    git clone https://github.com/gracebir/auth-system-app
```

2.  Go to the project folder
```sh
    cd auth-system-app
```

3. Install packages with yarn
```sh
    yarn
```

4. After install dependancies, you need to run prisma migration for seeding up your `sqlite` database by runing:
```sh
    yarn prisma:migrate
```

5. Set up your `.env` file
- Duplicate .env.example to .env
- Use `openssl rand -base64 32` to generate a key and add it under `NEXTAUTH_SECRET` in the `.env` file.
- Use `openssl rand -base64 24` to generate a key and add it under `SECRET_KEY` in the `.env` file
`
6. Run the app with the followin command:

```sh
    yarn dev
```