import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "会社概要 | HATTO",
  description: "株式会社HATTOの会社概要。東京都千代田区外神田の着付け・ヘアメイクサロン。",
};

const companyInfo = [
  { label: "会社名", value: "株式会社HATTO" },
  { label: "所在地", value: "〒101-0021\n東京都千代田区外神田３丁目６−５\n外神田永谷タウンプラザ 408" },
  { label: "アクセス", value: "末広町駅 徒歩2分\n神田明神 徒歩1分" },
  { label: "営業時間", value: "平日 6:30〜20:00\n土日 6:30〜17:00" },
  { label: "事業内容", value: "着付け・ヘアメイク・撮影スタイリング" },
];

export default function AboutPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-16">
      {/* Header */}
      <div className="text-center mb-12">
        <p className="text-xs tracking-[0.3em] text-[#f78da7] mb-2 uppercase">
          About
        </p>
        <h1 className="text-2xl font-bold text-[#333] tracking-wide">
          会社概要
        </h1>
      </div>

      {/* Table */}
      <div className="divide-y divide-[#f0d0d8]">
        {companyInfo.map(({ label, value }) => (
          <div
            key={label}
            className="grid grid-cols-[120px_1fr] gap-4 py-4 text-sm"
          >
            <dt className="font-medium text-[#555]">{label}</dt>
            <dd className="text-[#333] whitespace-pre-line">{value}</dd>
          </div>
        ))}
      </div>

      {/* Map */}
      <div className="mt-12">
        <p className="text-sm font-medium text-[#333] mb-4">地図</p>
        <div className="bg-[#f5f5f5] rounded-2xl h-72 flex items-center justify-center text-sm text-[#999]">
          地図を表示（Googleマップ埋め込み）
        </div>
      </div>
    </div>
  );
}
