# ProBlog Web Application

<p>
    <img src="https://img.shields.io/badge/Progressive Web App -PWA-purple?style=flat">
    <img src="https://img.shields.io/badge/Language-TypeScript-blue?style=flat&logo=typescript">
    <img src="https://img.shields.io/badge/CMS-Contentful-yellow?style=flat&logo=contentful">
    <img src="https://img.shields.io/badge/Library-Next.js-black?style=flat&logo=next.js">
    <img src="https://img.shields.io/badge/Deploy-Vercel-black?style=flat&logo=vercel">
    <img src="https://img.shields.io/badge/Cloud storage-Firebase-orange?style=flat&logo=firebase">
    <img src="https://img.shields.io/badge/Styling-TailwindCSS-teal?style=flat&logo=tailwindcss">
    
</p>
<img src="https://img.shields.io/badge/made--by-Artur Okhotnichenko-crimson?style=flat">

#### DEMO 👉  : https://pro-blog.vercel.app/

**_ProBlog is PWA(Progressive Web Application), where you can find and read posts on the most popular topics. In ProBlog app Contentful CMS helps to manage app content. The App has a fully responsive layout._**

### Prerequisites

You will need [Node.js](https://nodejs.org) version 8.0 or greater installed on your system.

### Setup

- Get the code by either cloning this repository using git
  
  ```
  git clone https://github.com/ohotnikarturik/pro-blog.git
  ```
  ... or [downloading source code](https://github.com/ohotnikarturik/pro-blog/archive/main.zip) code as a zip archive.
  
  Once downloaded, open the terminal in the project directory, and install dependencies with:
  
  ```
  yarn  or  npm install
  ```
- In project root, create `.env.local` file
- Setup environment variables key in `.env.local` file, example below:
```
  // Contentful keys
  NEXT_CONTENTFUL_SPACE_ID=YOUR_NEXT_CONTENTFUL_SPACE_ID
  NEXT_CONTENTFULL_ACCESS_TOKEN=YOUR_NNEXT_CONTENTFULL_ACCESS_TOKEN

  // Firebase keys
  NEXT_PUBLIC_FIREBASE_API_KEY=YOUR_NNEXT_PUBLIC_FIREBASE_API_KEY
  NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=YOUR_NNEXT_PUBLIC_FIREBASE_AUTH_DOMAIN
  NEXT_PUBLIC_FIREBASE_PROJECT_ID=YOUR_NNEXT_PUBLIC_FIREBASE_PROJECT_ID
  NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=YOUR_NNEXT_PUBLIC_FIREBASE_STORAGE_BUCKET
  NEXT_PUBLIC_FIREBASE_SENDER_ID=YOUR_NNEXT_PUBLIC_FIREBASE_SENDER_ID
  NEXT_PUBLIC_FIREBASE_APP_ID=YOUR_NNEXT_PUBLIC_FIREBASE_APP_ID
  NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=YOUR_NNEXT_PUBLIC_FIREBASE_MEASUREMENT_ID
```
- Sign Up account on Contentful. In Contentful create specific model and fill content. Add Api keys to `.env.local` file.
- Sign Up account on Firebase and create project with Cloud Firestore. Add Api key to `.env.local` file.


Then start the example app with:

```
yarn dev or npm run dev
```

The app should now be up and running at http://localhost:3000 🚀
