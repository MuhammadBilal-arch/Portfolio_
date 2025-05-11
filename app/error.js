'use client';

import { useEffect } from 'react';

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error('Error:', error);
  }, [error]);

  return (
    <div className="h-screen flex flex-col justify-center items-center text-center px-4">
      <h1 className="text-3xl font-bold mb-4">Something went wrong</h1>
      <p className="text-gray-600 mb-6">{error.message}</p>
      <button
        className="bg-blue-600 text-white px-4 py-2 rounded"
        onClick={() => reset()}
      >
        Try Again
      </button>
    </div>
  );
}
