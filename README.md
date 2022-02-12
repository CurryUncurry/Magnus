# [Ω Magnus DAO Frontend](https://magnus.vercel.app/)

## 🔧 Setting up Local Development

Required:

- [Node v16](https://nodejs.org/download/release/latest-v16.x/)
- [Yarn](https://classic.yarnpkg.com/en/docs/install/)
- [Git](https://git-scm.com/downloads)

```bash
$ git clone https://github.com/CurryUncurry/Magnus.git
$ cd Magnus

$ yarn
$ yarn dev

# Set up Husky (for pre-commit hooks) by running:
$ yarn prepare
```

The site is now running at `http://localhost:3000`!
Open the source code and start editing!

## Architecture/Layout

The app is written in [React](https://reactjs.org/) using [Redux](https://redux.js.org/) as the state container and [NextJS](https://nextjs.org/).

The files/folder structure are a **WIP** and may contain some unused files. The project is rapidly evolving so please update this section if you see it is inaccurate!

```
./
├── app/          // App logic page
├── components/   // Reusable individual components
├── config/       // Resusable constants
├── hoc/          // Higher Order Components
├── hooks/        // Custom hooks with common logic
├── pages/        // Page structure
├── public/       // Static assets
└── theme/        // Theme customization files
```