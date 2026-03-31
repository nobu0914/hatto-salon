import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "お問い合わせ | HATTO",
  description: "HATTOへのお問い合わせはこちらから。ヘアメイク・着付けに関するご相談をお気軽にどうぞ。",
};

const LINE_URL = "https://lin.ee/zcClomJ";
const BOOKING_URL =
  "https://beauty.hotpepper.jp/CSP/bt/reserve/?storeId=H000352141&ch=5&vos=cphpbprocap0130408001";

export default function ContactPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-16">
      {/* Header */}
      <div className="text-center mb-12">
        <p className="text-xs tracking-[0.3em] text-[#f78da7] mb-2 uppercase">
          Contact
        </p>
        <h1 className="text-2xl font-bold text-[#333] tracking-wide mb-3">
          お問い合わせ
        </h1>
        <p className="text-sm text-[#666] leading-relaxed">
          ご予約・ご相談はLINEまたはホットペッパービューティーが便利です。
          <br />
          メールでのお問い合わせは下記フォームをご利用ください。
        </p>
      </div>

      {/* Quick contact */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
        <a
          href={BOOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 bg-[#f78da7] text-white py-4 rounded-2xl text-sm font-medium hover:bg-[#f06292] transition-colors"
        >
          ホットペッパーで予約
        </a>
        <a
          href={LINE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 bg-[#06C755] text-white py-4 rounded-2xl text-sm font-medium hover:opacity-90 transition-opacity"
        >
          LINEで問い合わせ
        </a>
      </div>

      <div className="border-t border-[#f0d0d8] pt-10">
        <h2 className="text-base font-bold text-[#333] mb-6">
          メールでのお問い合わせ
        </h2>
        <ContactForm />
      </div>

      {/* Notes */}
      <div className="mt-8 text-xs text-[#999] space-y-1">
        <p>・ご返信までに数日かかる場合がございます。</p>
        <p>・七五三のお問い合わせはLINEのみとなります。</p>
        <p>・お電話でのご対応はできかねる場合がございます。</p>
      </div>
    </div>
  );
}
