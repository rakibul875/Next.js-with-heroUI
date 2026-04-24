"use client"
import Link from "next/link";
import React from "react";
import ThemeToggle from "../Theme/ThemeToggle";
import { usePathname } from "next/navigation";

const NavBer = () => {
  const pathname=usePathname()
  return (
    <nav className="sticky top-0 z-40 w-full border-b border-separator bg-background/70 backdrop-blur-lg">
      <header className="flex h-16 items-center justify-between px-6">
        <div className="flex items-center gap-3">
          
          <p className="font-bold">ACME</p>
        </div>
        <ul className="flex items-center gap-4 mx-2">
          <li>
            <Link className={`${pathname==='/'?'text-green-400 border border-green-400 px-4 py-1':''}`} href="/">Home</Link>
          </li>
          <li>
            <Link className={`${pathname==='/tasks'?'text-green-400 border border-green-400 px-4 py-1':''}`} href="/tasks">Tasks</Link>
          </li>
        </ul>
        <div className="">
            <ThemeToggle/>
        </div>
      </header>
    </nav>
  );
};

export default NavBer;
