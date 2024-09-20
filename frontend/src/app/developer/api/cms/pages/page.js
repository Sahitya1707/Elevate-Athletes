"use client";

import React from "react";

const Page = () => {
  const pages = [
    { id: 1, title: "Home", status: "Published", lastModified: "2024-09-18" },
    { id: 2, title: "About", status: "Draft", lastModified: "2024-09-17" },
    {
      id: 3,
      title: "Contact",
      status: "Published",
      lastModified: "2024-09-16",
    },
  ];

  return (
    <div className="p-6">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">Pages</h1>
        <button className="px-4 py-2 bg-blue-500 text-white rounded-md">
          + Add New Page
        </button>
      </div>

      {/* Pages Table */}
      <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
        <thead>
          <tr className="bg-gray-100 text-gray-600 uppercase text-sm leading-normal">
            <th className="py-3 px-6 text-left">Page Title</th>
            <th className="py-3 px-6 text-left">Status</th>
            <th className="py-3 px-6 text-left">Last Modified</th>
            <th className="py-3 px-6 text-center">Actions</th>
          </tr>
        </thead>
        <tbody className="text-gray-600 text-sm">
          {pages.map((page) => (
            <tr
              key={page.id}
              className="border-b border-gray-200 hover:bg-gray-100"
            >
              <td className="py-3 px-6 text-left">{page.title}</td>
              <td className="py-3 px-6 text-left">
                <span
                  className={`py-1 px-3 rounded-full text-xs ${
                    page.status === "Published"
                      ? "bg-green-200"
                      : "bg-yellow-200"
                  }`}
                >
                  {page.status}
                </span>
              </td>
              <td className="py-3 px-6 text-left">{page.lastModified}</td>
              <td className="py-3 px-6 text-center">
                <button className="text-blue-600 hover:text-blue-900">
                  Edit
                </button>
                <span className="mx-2">|</span>
                <button className="text-red-600 hover:text-red-900">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Page;
