import Tile from "@/components/tile";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center mt-10 gap-8">
      <header className="flex flex-col items-center gap-1">
        <p className="text-[10px] uppercase tracking-[0.3em] text-gray-400 font-medium">Today's Edition</p>
        <h1 className="text-5xl font-bold tracking-tight text-black">Hermes Wire</h1>
        <div className="w-12 h-px bg-gray-200 mt-1" />
      </header>
      <Link href={`/news/1`}>
        <Tile
          headline="OpenAI launches GPT-5 with real-time reasoning"
          text="The latest model from OpenAI claims to outperform human experts on bar exams, medical licensing tests, and competitive programming benchmarks. Early access is rolling out to Plus users this week."
          category="Tech"
          maxHeight={250}
          maxWidth={400}
          imageUrl="https://images.unsplash.com/photo-1745674684539-d90293d659a9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
      </Link>
    </div>
  );
}