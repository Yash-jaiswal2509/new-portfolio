import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center gap-4">
      <h2 className="text-4xl font-bold text-white">404</h2>
      <p className="text-white text-lg">Page not found</p>
      <Link href="/">
        <Button variant="custom" className="mt-4">
          Return Home
        </Button>
      </Link>
    </div>
  );
} 