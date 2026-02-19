import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-zinc-950 text-zinc-100 text-center px-4">
      <h1 className="text-6xl font-bold mb-4 text-red-500">404</h1>
      <h2 className="text-2xl mb-6">Oops! Page Not Found</h2>
      <p className="mb-6 text-zinc-400">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link
        to="/"
        className="px-6 py-3 bg-zinc-100 text-black rounded hover:bg-zinc-300 transition"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default NotFound;
