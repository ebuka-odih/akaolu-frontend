import Image from "next/image";
import logoImg from '@/public/images/2.png'
import Navbar from "@/components/layout/navbar";


export default function Home() {
  return (
      <div>
           <Navbar />
            <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
              <div className="h-screen bg-slate-500 w-full pt-56">
              </div>

        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image className=""
          src={logoImg}
          alt="OLU.js logo"
          width={230}
          height={200}
          priority
        />

      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">

      </footer>
    </div>
      </div>
);
}