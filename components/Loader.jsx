// components/Loader.tsx
"use client";

import { Loader2 } from "lucide-react";
import { useEffect, useState } from "react";

export default function Loader() {
   const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      // Simulate loading (you can also check images / animation ready state here)
      const timer = setTimeout(() => setLoading(false), 100);
      return () => clearTimeout(timer);
    }, []);
  
    if (loading) return <Loader2 size={34} />;
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-[rgb(10,15,44)]">
      <div className="h-12 w-12 animate-spin rounded-full border-4 border-white border-t-transparent"></div>
    </div>
  );
}
