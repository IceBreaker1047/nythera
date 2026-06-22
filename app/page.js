import Tile from "@/components/tile";

export default function Home() {
  return (
    <div className="flex justify-center items-center mt-5">
      <Tile
        headline="OpenAI launches GPT-5 with real-time reasoning"
        text="The latest model from OpenAI claims to outperform human experts on bar exams, medical licensing tests, and competitive programming benchmarks. Early access is rolling out to Plus users this week."
        category="Tech"
      />
    </div>
  );
}