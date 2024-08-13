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

- **Defination** - JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. (Read More: https://medium.com/@maison.moa/using-jwt-json-web-tokens-to-authorize-users-and-protect-api-routes-3e04a1453c3e, https://frontegg.com/guides/jwt-authorization)

# What is JWT made up of?

- A JWT consists of three parts:

  **Header:** Metadata about the token.
  **Payload:** Data to be encoded (not for sensitive information).
  **Signature:** Created from header, payload, and a secret server key.

      - The header and payload are plain text, but the signature verifies their authenticity. Sensitive data should never be stored in a JWT.

# To set up the backend for web site application, I have installed the following dependencies:

- **cors**: A package for enabling Cross-Origin Resource Sharing (CORS) to allow resources to be shared between different origins.
- **dotenv**: A module to load environment variables from a `.env` file into `process.env`.
- **express**: A web application framework for Node.js, used for building the server and handling HTTP requests.
- **mongodb**: The official MongoDB driver for Node.js, used for interacting with MongoDB databases.
- **mongoose**: An ODM (Object Data Modeling) library for MongoDB and Node.js, providing a higher-level abstraction for interacting with MongoDB.
- **multer**: A middleware for handling `multipart/form-data`, which is used for file uploads.

# What is bcrypt js?

- Bcrypt uses a complex `hashing function` that generates a seemingly random string of characters from a plaintext password. This makes it virtually impossible to reverse the hash and recover the original password. Bcrypt adds another layer of security by incorporating a random string called a `salt` before hashing the password.
  - **Comparing password in bcrypt** - Read it here https://www.freecodecamp.org/news/how-to-hash-passwords-with-bcrypt-in-nodejs/#:~:text=hashed%20password%20asynchronously.-,bcrypt.,indicating%20whether%20the%20passwords%20match.

# What is jwt.sign ?

- Thi method is used to create the JWT. It can take three argument `payload`,`secret_key`, and `options`.
  **Payload** - It is the data that has to be encoded in the JWT.
  **secretKey** - It is a key used to sign the JWT and it is fetched from the .env.
  **options** - It contains the various other parameters like `expiresIn`, `audience`, `issuer`, and `alogrithms`

  # What is HTTP-Only Cookies?

  - HTTP-only cookies are a security feature that prevents client-side scripts (JavaScript) from accessing and manipulating cookie data. This helps protect against Cross-Site Scripting (XSS) attacks, where malicious code can steal sensitive information stored in cookies.

# Token Management and Cookie Settings

## Fetch API and Credentials

When making requests to the server, ensure that `credentials` is included in the fetch options to enable cookie handling. This ensures that cookies, including the access and refresh tokens, are sent along with the request:

```javascript
fetch("http://your-api-endpoint", {
  method: "GET", // or 'POST', etc.
  credentials: "include", // Important: includes cookies with the request
})
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error("Error:", error));
```
