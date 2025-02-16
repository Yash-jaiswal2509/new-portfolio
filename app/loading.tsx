export default function Loading() {
  return (
    <div className="h-screen w-full flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="w-8 h-8 border-4 border-white border-t-transparent rounded-full animate-spin" />
        <p className="text-white text-lg animate-pulse">Loading...</p>
      </div>
    </div>
  );
} 