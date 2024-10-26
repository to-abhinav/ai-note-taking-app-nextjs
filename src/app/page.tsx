import Image from "next/image";
import logo from "@/assets/Picsart_24-10-10_07-04-57-418.jpg";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";


export default function Home() {
  const {userId}= auth();
  if(userId){
    redirect("/notes");
  }



  return (
    <main className="flex flex-col h-screen items-center justify-center gap-5">
      <div className="flex flex-col items-center gap-4">
        <Image src={logo} alt="mind-me logo" width={200} height={200} />
        <span className="text-4xl font-extrabold tracking-tight lg:text-5xl">
          mind-me
        </span>
      </div>
      <p className="text-center text-gray-500 max-w-prose">
        An intellegent Nottaking app with AI integration, built with OpenAI
      </p>
      <Button asChild size="lg">
        <Link href="/notes">Open</Link>
      </Button>
    </main>
  );
}
