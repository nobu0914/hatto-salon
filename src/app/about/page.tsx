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
        <p className="text-xs tracking-[0.3em] text-[#8B7355] mb-2 uppercase">
          About
        </p>
        <h1 className="text-2xl font-bold text-[#333] tracking-wide">
          会社概要
        </h1>
      </div>

      {/* Table */}
      <div className="divide-y divide-[#E8DDD0]">
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
        <div className="rounded-2xl overflow-hidden h-72">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3239.9566283317286!2d139.7697207!3d35.7026849!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188eb0017da995%3A0x917af5e9c0eb7899!2z44OY44Ki44Oh44Kk44Kv552A5LuY44GR44K144Ot44OzSEFUVE8o44OP44OD44OI44Km77yJ!5e0!3m2!1sja!2sjp!4v1774967576296!5m2!1sja!2sjp"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>
  );
}
