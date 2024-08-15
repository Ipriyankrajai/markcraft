"use client";
import Editor from "@/components/editor/advanced-editor";
import { defaultValue } from "@/components/editor/default-values";
import { ThemeToggle } from "@/components/theme-toggle";
import { JSONContent } from "novel";
import { useState } from "react";

export default function Home() {
  const [value, setValue] = useState<JSONContent>(defaultValue);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col p-6 border max-w-xl w-full gap-6 rounded-md bg-card">
        <div className="flex justify-between">
          <h1 className="text-4xl font-semibold">MarkCraft</h1>
          <ThemeToggle />
        </div>
        <Editor initialValue={value} onChange={setValue} />
      </div>
    </main>
  );
}
