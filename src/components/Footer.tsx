import Link from "next/link";

const pageLinks = [
  { href: "/", label: "ホーム" },
  { href: "/price", label: "料金" },
  { href: "/contact", label: "お問い合わせ" },
  { href: "/about", label: "会社概要" },
  { href: "/privacy", label: "プライバシーポリシー" },
];

export default function Footer() {
  return (
    <footer className="bg-[#fdf7f9] border-t border-[#f0d0d8] mt-20">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <p className="text-xl font-bold tracking-[0.2em] text-[#333] mb-3">
              HATTO
            </p>
            <p className="text-sm text-[#666] leading-relaxed">
              東京・外神田の着付け・ヘアメイクサロン
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold text-[#333] mb-3">メニュー</p>
            <ul className="space-y-2">
              {pageLinks.map((n) => (
                <li key={n.href}>
                  <Link
                    href={n.href}
                    className="text-sm text-[#666] hover:text-[#f78da7] transition-colors"
                  >
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold text-[#333] mb-3">アクセス</p>
            <address className="not-italic text-sm text-[#666] leading-relaxed space-y-1">
              <p>株式会社HATTO</p>
              <p>〒101-0021</p>
              <p>東京都千代田区外神田３丁目６−５</p>
              <p>外神田永谷タウンプラザ 408</p>
              <p className="mt-2">末広町駅 徒歩2分</p>
              <p>神田明神 徒歩1分</p>
              <p className="mt-2">平日 6:30〜20:00</p>
              <p>土日 6:30〜17:00</p>
            </address>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-[#f0d0d8] text-center">
          <p className="text-xs text-[#999]">
            © {new Date().getFullYear()} 株式会社HATTO. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
