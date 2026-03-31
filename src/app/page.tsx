import Link from "next/link";
import Image from "next/image";

const BOOKING_URL =
  "https://beauty.hotpepper.jp/CSP/bt/reserve/?storeId=H000352141&ch=5&vos=cphpbprocap0130408001";
const LINE_URL = "https://lin.ee/zcClomJ";

const services = [
  {
    title: "着付け・ヘアメイク",
    desc: "振袖・留め袖・訪問着・袴・浴衣など各種着付けに対応。ヘアセット・フルメイクも承ります。大切な一日を丁寧にコーディネートします。",
    time: "施術時間 30〜60分",
  },
  {
    title: "ヘアアレンジ／メイクレッスン",
    desc: "ヘアメイク、アイメイク、眉のひき方などひとりひとりに合わせたレッスンを行います。撮影等の技術指導も対応可能です。",
    time: "",
  },
  {
    title: "撮影",
    desc: "和装・洋装を問わず、撮影シーンに合わせたヘアメイク・着付けをトータルにサポートします。新郎新婦のご希望に沿ったスタイルをご提案します。",
    time: "",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[70vh] min-h-[480px] flex items-center justify-center text-center overflow-hidden">
        <Image
          src="/hero.jpg"
          alt="HATTOサロン"
          fill
          className="object-cover object-top"
          priority
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 px-4">
          <p className="text-xs tracking-[0.3em] text-white/80 mb-4 uppercase">
            Hair & Kimono Styling Salon
          </p>
          <h1 className="text-4xl md:text-6xl font-bold tracking-[0.2em] text-white mb-6">
            HATTO
          </h1>
          <p className="text-sm md:text-base text-white/90 leading-relaxed mb-10 max-w-md mx-auto">
            東京・外神田の着付け・ヘアメイクサロン。
            <br />
            成人式・卒業式・七五三・撮影など
            <br />
            大切な一日をトータルにコーディネートします。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#8B7355] text-white px-8 py-3 rounded-full text-sm font-medium hover:bg-[#7A6048] transition-colors"
            >
              ホットペッパーで予約
            </a>
            <a
              href={LINE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white text-white px-8 py-3 rounded-full text-sm font-medium hover:bg-white/20 transition-colors"
            >
              LINEで問い合わせ
            </a>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="max-w-6xl mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <p className="text-xs tracking-[0.3em] text-[#8B7355] mb-2 uppercase">
            Services
          </p>
          <h2 className="text-2xl font-bold text-[#333] tracking-wide">
            サービス内容
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="border border-[#E8DDD0] rounded-2xl p-6 hover:shadow-sm transition-shadow"
            >
              <h3 className="text-base font-bold text-[#333] mb-2">
                {s.title}
              </h3>
              <p className="text-sm text-[#666] leading-relaxed mb-3">
                {s.desc}
              </p>
              <p className="text-xs text-[#8B7355]">{s.time}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link
            href="/price"
            className="text-sm text-[#8B7355] border-b border-[#8B7355] pb-0.5 hover:text-[#7A6048] hover:border-[#7A6048] transition-colors"
          >
            料金一覧を見る →
          </Link>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="bg-[#FAF7F2] py-16 px-4 text-center">
        <p className="text-xs tracking-[0.3em] text-[#8B7355] mb-2 uppercase">
          Reservation
        </p>
        <h2 className="text-2xl font-bold text-[#333] mb-4 tracking-wide">
          ご予約・お問い合わせ
        </h2>
        <p className="text-sm text-[#666] leading-relaxed mb-8 max-w-sm mx-auto">
          Webクーポンをご利用の場合はホットペッパービューティーからのご予約がお得です。
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#8B7355] text-white px-8 py-3 rounded-full text-sm font-medium hover:bg-[#7A6048] transition-colors"
          >
            ホットペッパービューティーで予約
          </a>
          <a
            href={LINE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#06C755] text-white px-8 py-3 rounded-full text-sm font-medium hover:opacity-90 transition-opacity"
          >
            LINEで問い合わせ
          </a>
          <Link
            href="/contact"
            className="border border-[#8B7355] text-[#8B7355] px-8 py-3 rounded-full text-sm font-medium hover:bg-[#FAF7F2] transition-colors"
          >
            お問い合わせフォーム
          </Link>
        </div>
      </section>

      {/* Access */}
      <section className="max-w-6xl mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <p className="text-xs tracking-[0.3em] text-[#8B7355] mb-2 uppercase">
            Access
          </p>
          <h2 className="text-2xl font-bold text-[#333] tracking-wide">
            アクセス
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          <div className="space-y-4">
            <div>
              <p className="text-xs font-semibold text-[#8B7355] mb-1">
                住所
              </p>
              <address className="not-italic text-sm text-[#555] leading-relaxed">
                〒101-0021
                <br />
                東京都千代田区外神田３丁目６−５
                <br />
                外神田永谷タウンプラザ 408
              </address>
            </div>
            <div>
              <p className="text-xs font-semibold text-[#8B7355] mb-1">
                最寄り駅
              </p>
              <p className="text-sm text-[#555]">
                末広町駅 徒歩2分
                <br />
                神田明神 徒歩1分
              </p>
            </div>
            <div>
              <p className="text-xs font-semibold text-[#8B7355] mb-1">
                営業時間
              </p>
              <p className="text-sm text-[#555]">
                平日 6:30〜20:00
                <br />
                土日 6:30〜17:00
              </p>
            </div>
          </div>
          {/* Map placeholder — replace with actual embed */}
          <div className="bg-[#f5f5f5] rounded-2xl h-64 flex items-center justify-center text-sm text-[#999]">
            地図を表示（Googleマップ埋め込み）
          </div>
        </div>
      </section>
    </>
  );
}
