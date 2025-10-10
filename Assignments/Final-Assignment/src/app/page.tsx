"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      const email = localStorage.getItem("userEmail");
      if (!email) {
        router.replace("/sign-up");
      } else {
        router.replace("/products");
      }
    } catch (err) {
      console.error("Error accessing localStorage:", err);
    } finally {
      setLoading(false);
    }
  }, [router]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      {loading ? (
        <p className="text-gray-600 text-lg font-medium animate-pulse">
          Redirecting...
        </p>
      ) : (
        <p className="text-gray-600 text-lg font-medium animate-pulse">
          Preparing your experience...
        </p>
      )}
    </div>
  );
}
