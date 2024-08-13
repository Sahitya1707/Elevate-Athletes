// pages/dashboard.js
import React from "react";
import { parseCookies } from "nookies"; // Install nookies package if not already installed
import { verifyToken } from "../utils/auth"; // Utility function to verify token

const Dashboard = () => {
  return <div>Page</div>;
};

export async function getServerSideProps(ctx) {
  const cookies = parseCookies(ctx);
  const token = cookies.token;

  try {
    // Verify the token (implement your own token verification logic)
    await verifyToken(token);

    return {
      props: {}, // If authenticated, return props (can be empty)
    };
  } catch (error) {
    // Redirect to login if token is invalid or not present
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }
}

export default Dashboard;
