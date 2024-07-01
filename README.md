This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the nestedPage by modifying `app/nestedPage.tsx`. The nestedPage auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## React Component

**React Server Components (Server-Side Rendering)**:
With React Server Components, components can also be rendered on the server. When a user visits a web page, the server generates the initial HTML for the page, including any server components. This HTML is sent to the client, which then hydrates the components, making them interactive.

- **Server-Side Rendering (SSR)**: The server renders React components into HTML strings and sends them to the client.
- **Client-Side Hydration**: Once the HTML reaches the client, React takes over and hydrates the server-rendered components. This process attaches event handlers and enables client-side interactivity.

**Data Fetching in React Server Components**:

- **Declaration of Data Dependencies**: In React Server Components, components declare their data dependencies directly within the component itself. This means that a server component can specify what data it needs to render, right alongside its rendering logic.
- **Server-Side Data Fetching**: When a server component is rendered on the server, it fetches the required data. This data fetching process happens during the server-side rendering phase, ensuring that the component has all the necessary data before being sent to the client.
- **Included in HTML Response**: Once the data is fetched, it is included in the HTML response sent to the client. This means that when the client receives the initial HTML, it already contains the necessary data, allowing for faster rendering and improved performance.

En gros résumé, le serveur va générer des pages html, avec si nécessaire des données provenant de fetch. (Par principe uniquement des get sont possibles). Les interactions avec l’initialisation de la data n’est pas possible avec le RSC, ainsi que les fetch avec des interactions de l’utilisateur.

Une fois la page html générer avec les données initiales, le serveur l’envoie au côté du client qui va par la suite hydrater avec les éléments nécessaire (eventHandlers ect…)