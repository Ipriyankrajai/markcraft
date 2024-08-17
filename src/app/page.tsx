import Editor from "@/components/editor";
import { ThemeToggle } from "@/components/theme-toggle";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-5">
      <div className="flex flex-col p-6 border max-w-5xl w-full gap-6 rounded-md bg-card">
        <div className="flex justify-between">
          <h1 className="text-4xl font-semibold">Editor</h1>
        </div>
        <Editor />
      </div>
    </main>
  );
}
