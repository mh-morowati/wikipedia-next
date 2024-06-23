import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-[420px] h-auto">
      <div className="w-[70%] relative left-[250px] top-[90px]">
        <Link className="text-2xl" href={'/next.js'}>1- <span className="text-sky-600 hover:underline">Next.js</span></Link>
      </div>
    </main>
  );
}
