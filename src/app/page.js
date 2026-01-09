"use client";
import Coupons from "./coupons/page";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900 flex justify-center">
      <div className="w-full max-w-[375px] bg-gray-100 py-2 relative">
        <Coupons />
      </div>
    </main>
  );
}
