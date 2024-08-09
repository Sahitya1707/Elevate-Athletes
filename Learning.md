# Learning Log

- This file will include what I have done while creating this project and what I have learned.

# Folder structure for next js

# How do you handle the error in next js?

- **Custom 404 page** - The `not-found.js` file allows you to create a custom page to display when users attempt to access non-existent routes in your application.
- **Error Boundary for route segments** - The `error.js` file defines an error boundary component for a specific route segment. It catches unexpected errors and displays a fallback UI.
- **Error Boundaries - Global Error Handling** -
  Error boundaries are React components that catch JavaScript errors within their tree, preventing them from crashing the entire application.

# How do you approach for dark mode and light mode in tailwind?

- There are many options for this but I have opt for using the css variables that is using the `:root` element.
- At first you need to declare the root inside your `global.css` and put all you colors over there with proper naming.
- Create another :root with [class~="dark"] which will targets the root element if it has dark class.
- now you can define those colors in `tailwind.config.js`
- Resources, https://tailwindcss.com/docs/customizing-colors ,https://stackoverflow.com/questions/72117668/tailwind-colors-based-on-dark-mode

# For the developer log in into the dashboard

- My approach for the login of the developer into the backend is that there should be super admin and admin and the credntials should already be defined so for this I will try to create a seeder functions where I can store that credentials.

# React redux in next js

- In Next.js 13, you cannot directly use React Redux in the root layout because Next.js renders components on the server by default. To use Redux’s <Provider>, which requires a client component, you need to create an additional layout designated as a client component. This layout, such as `AppLayout`, can then include the Redux <Provider> and pass children props to render your components properly.

# What is suspense in react?

- Suspense is a React feature that allows components to declaratively express that they are waiting for something to load. It provides a way to gracefully handle `asynchronous operations`, such as `data fetching` or `code splitting`, by `displaying a fallback UI` while the operation is in progress.

# Fast Reloading in next js

- Next js perform a fast reload whenever you edit a file that only `exports React Components`, or if we edit the file that aren't React components, or if we import a files that are outside ot the `React tree`.
  Read More - https://nextjs.org/docs/architecture/fast-refresh

# How do you use the google font in next js?

- To add the font in all your pages you can add that in the layout, rootlayout. You can read more here: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts

# What is color Mapping in tailwind css?

- Color mapping is a technique used to associate specific color names with their corresponding CSS variable values. This allows you to pass a simple string as a prop to your component and have it automatically use the correct CSS variable for styling. You can see the deifinition of color mapping inside `assets->colorMapping.js` and example in `components->navButton.js`.

# What is get, post, put, delete in express?

- `GET` : Retrieves data from the server. Typically used for fetching resources without modifying them.
- `POST` : Creates new data on the server. Commonly used for submitting forms, uploading files, or creating new records.
- `PUT` : Updates existing data on the server.
- `DELETE` : Deletes existing data from the server.

# Using Json Web token for the authorization?

- **Defination** - JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. (Read More: https://medium.com/@maison.moa/using-jwt-json-web-tokens-to-authorize-users-and-protect-api-routes-3e04a1453c3e)

# To set up the backend for web site application, I have installed the following dependencies:

- **cors**: A package for enabling Cross-Origin Resource Sharing (CORS) to allow resources to be shared between different origins.
- **dotenv**: A module to load environment variables from a `.env` file into `process.env`.
- **express**: A web application framework for Node.js, used for building the server and handling HTTP requests.
- **mongodb**: The official MongoDB driver for Node.js, used for interacting with MongoDB databases.
- **mongoose**: An ODM (Object Data Modeling) library for MongoDB and Node.js, providing a higher-level abstraction for interacting with MongoDB.
- **multer**: A middleware for handling `multipart/form-data`, which is used for file uploads.
