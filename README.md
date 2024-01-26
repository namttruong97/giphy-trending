# PI EXCHANGE - GIPHY TRENDING

This reactjs web application helps users view trending photos from GIPHY. It was created in about 2 days as a demo for employers.

## Demo

https://giphy-trending-pi-exchange.vercel.app/

## Run Locally

Clone the project

```bash
  git clone https://github.com/namttruong97/giphy-trending.git
```

Go to the project directory

```bash
  cd giphy-trending
```

Install dependencies

```bash
  yarn
```

Start the development server

```bash
  yarn dev
```

Start the production server

```bash
  yarn build
  yarn dev
```

Start by Docker

```bash
  docker build -t giphy-trending .
  docker run -p 3000:3000 giphy-trending
```

## Features

- Show trending image/ detail image
- Search image by name
- Caching image, placeholder loading, lazy loading
- Responsive

## Tech Stack

**Client:** NextJS, ANTD, Jotail, TailwindCSS, React Query, GIPHY SDK.

## Roadmap

- Improve the placeholder loading smoothly

- Improve the UI

## Authors

- [@namttruong97 - Github](https://github.com/namttruong97)
- [@namtruong - LinkedIn](https://www.linkedin.com/in/namttruong/)
