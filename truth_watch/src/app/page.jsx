"use client"; // Mark as client component

import { useRouter } from "next/navigation";
export default function Home() {
  const router = useRouter();
  return <div>this is home page</div>;
}
