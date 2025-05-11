"use client";

import Link from "next/link";
import { FaArrowRight } from "react-icons/fa"; // Corrected the import to FaArrowRight

export default function NotSignedInScreen() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4">
      <div className="max-w-md bg-white shadow-md rounded-2xl p-6 text-center">
        <h1 className="text-2xl font-semibold text-gray-800 mb-2">Access Denied</h1>
        <p className="text-gray-600 mb-6">You must be signed in to view this page.</p>
        <Link href="/auth/sign-in">
          <button className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition">
            Go to Sign In <FaArrowRight className="ml-2 h-4 w-4" /> {/* Corrected the icon component */}
          </button>
        </Link>
      </div>
    </div>
  );
}
