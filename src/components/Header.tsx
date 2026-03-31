"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "ホーム" },
  { href: "/price", label: "料金メニュー" },
  { href: "/contact", label: "お問い合わせ" },
];

const BOOKING_URL =
  "https://beauty.hotpepper.jp/CSP/bt/reserve/?storeId=H000352141&ch=5&vos=cphpbprocap0130408001";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-[#E8DDD0]">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="text-xl font-bold tracking-[0.2em] text-[#333]"
        >
          HATTO
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className="text-sm text-[#555] hover:text-[#8B7355] transition-colors"
            >
              {n.label}
            </Link>
          ))}
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#8B7355] text-white text-sm px-5 py-2 rounded-full hover:bg-[#7A6048] transition-colors"
          >
            ご予約はこちら
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 flex flex-col gap-1.5"
          onClick={() => setOpen(!open)}
          aria-label="メニューを開く"
        >
          <span
            className={`block w-6 h-0.5 bg-[#333] transition-transform origin-center ${open ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 bg-[#333] transition-opacity ${open ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 bg-[#333] transition-transform origin-center ${open ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-[#E8DDD0] px-4 py-4 flex flex-col gap-4">
          {navLinks.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className="text-sm text-[#555] py-1"
              onClick={() => setOpen(false)}
            >
              {n.label}
            </Link>
          ))}
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#8B7355] text-white text-sm px-5 py-3 rounded-full text-center"
            onClick={() => setOpen(false)}
          >
            ご予約はこちら
          </a>
        </div>
      )}
    </header>
  );
}
