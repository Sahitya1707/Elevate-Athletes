# Learning Log

- This file will include what I have done while creating this project and what I have learned.

# Folder structure for next js

# How do you handle the error in next js?

- **Custom 404 page** - The `not-found.js` file allows you to create a custom page to display when users attempt to access non-existent routes in your application.
- **Error Boundary for route segments** - The `error.js` file defines an error boundary component for a specific route segment. It catches unexpected errors and displays a fallback UI.
- **Error Boundaries - Global Error Handling** -
  Error boundaries are React components that catch JavaScript errors within their tree, preventing them from crashing the entire application.

# What is suspense in react?

- Suspense is a React feature that allows components to declaratively express that they are waiting for something to load. It provides a way to gracefully handle `asynchronous operations`, such as `data fetching` or `code splitting`, by `displaying a fallback UI` while the operation is in progress.

# How do you use the google font in next js?

- To add the font in all your pages you can add that in the layout, rootlayout. You can read more here: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts

# To set up the backend for web site application, I have installed the following dependencies:

- **cors**: A package for enabling Cross-Origin Resource Sharing (CORS) to allow resources to be shared between different origins.
- **dotenv**: A module to load environment variables from a `.env` file into `process.env`.
- **express**: A web application framework for Node.js, used for building the server and handling HTTP requests.
- **mongodb**: The official MongoDB driver for Node.js, used for interacting with MongoDB databases.
- **mongoose**: An ODM (Object Data Modeling) library for MongoDB and Node.js, providing a higher-level abstraction for interacting with MongoDB.
- **multer**: A middleware for handling `multipart/form-data`, which is used for file uploads.
