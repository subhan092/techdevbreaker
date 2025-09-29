"use client";

export default function BgAnimation() {
  return (
    <div className="fixed inset-0 -z-10 w-full h-full bg-gradient-to-b from-gray-900 via-black to-gray-900 overflow-hidden">
      {/* Floating gradient circles */}
      <div className="absolute top-1/4 left-1/3 w-72 h-72 bg-purple-500 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-move" />
      <div className="absolute top-2/3 left-1/4 w-96 h-96 bg-pink-500 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-move-slow" />
      <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-blue-500 rounded-full mix-blend-screen filter blur-3xl opacity-25 animate-move" />
      <style jsx>{`
        @keyframes move {
          0%, 100% { transform: translateY(0px) translateX(0px) scale(1); }
          50% { transform: translateY(-40px) translateX(30px) scale(1.1); }
        }
        .animate-move {
          animation: move 12s ease-in-out infinite;
        }
        .animate-move-slow {
          animation: move 20s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}

