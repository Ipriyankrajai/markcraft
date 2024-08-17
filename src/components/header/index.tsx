import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { ThemeToggle } from "../theme-toggle";

export default function Header() {
  return (
    <div className="sticky top-0 py-4 px-5 shadow-inset-light dark:shadow-inset-dark z-10 dark:bg-black bg-white bg-opacity-80">
      <div className="flex justify-between items-center">
        <Link href={"/"} className="font-semibold text-xl">
          MarkCraft
        </Link>
        <div className="flex gap-2">
          <Button>Get Started</Button>
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
}
