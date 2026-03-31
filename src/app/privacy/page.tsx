import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "プライバシーポリシー | HATTO",
};

export default function PrivacyPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <p className="text-xs tracking-[0.3em] text-[#8B7355] mb-2 uppercase">
          Privacy Policy
        </p>
        <h1 className="text-2xl font-bold text-[#333] tracking-wide">
          プライバシーポリシー
        </h1>
      </div>

      <div className="prose prose-sm max-w-none text-[#555] space-y-8 leading-relaxed">
        <section>
          <h2 className="text-base font-bold text-[#333] mb-3">
            個人情報の取り扱いについて
          </h2>
          <p>
            株式会社HATTO（以下「当社」）は、お客様の個人情報の保護を重要な責務と考え、以下の方針に基づいて個人情報を適切に取り扱います。
          </p>
        </section>

        <section>
          <h2 className="text-base font-bold text-[#333] mb-3">
            収集する個人情報
          </h2>
          <p>当社は、以下の目的でお客様の個人情報を収集することがあります。</p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>氏名、メールアドレス、電話番号（お問い合わせ・ご予約時）</li>
            <li>予約内容・施術内容に関する情報</li>
          </ul>
        </section>

        <section>
          <h2 className="text-base font-bold text-[#333] mb-3">
            個人情報の利用目的
          </h2>
          <p>収集した個人情報は、以下の目的にのみ使用します。</p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>ご予約・お問い合わせへの対応</li>
            <li>施術に関するご連絡</li>
            <li>サービス向上のための分析（個人を特定しない形で）</li>
          </ul>
        </section>

        <section>
          <h2 className="text-base font-bold text-[#333] mb-3">
            第三者への提供
          </h2>
          <p>
            当社は、法令に基づく場合を除き、お客様の同意を得ることなく個人情報を第三者に提供することはありません。
          </p>
        </section>

        <section>
          <h2 className="text-base font-bold text-[#333] mb-3">
            個人情報の管理
          </h2>
          <p>
            収集した個人情報は適切な方法で管理し、不正アクセス・紛失・漏洩・改ざん等の防止に努めます。
          </p>
        </section>

        <section>
          <h2 className="text-base font-bold text-[#333] mb-3">
            個人情報の開示・訂正・削除
          </h2>
          <p>
            お客様ご自身の個人情報の開示・訂正・削除をご希望の場合は、お問い合わせフォームよりご連絡ください。
          </p>
        </section>

        <section>
          <h2 className="text-base font-bold text-[#333] mb-3">
            プライバシーポリシーの変更
          </h2>
          <p>
            当社は、必要に応じて本ポリシーを変更することがあります。変更後のポリシーは本ページに掲載した時点で効力を生じます。
          </p>
        </section>

        <section>
          <h2 className="text-base font-bold text-[#333] mb-3">お問い合わせ</h2>
          <p>
            個人情報の取り扱いに関するお問い合わせは、下記までご連絡ください。
          </p>
          <address className="not-italic mt-2">
            <p>株式会社HATTO</p>
            <p>〒101-0021 東京都千代田区外神田３丁目６−５ 外神田永谷タウンプラザ 408</p>
          </address>
        </section>

        <p className="text-xs text-[#999] pt-4 border-t border-[#E8DDD0]">
          制定日：2024年1月1日
        </p>
      </div>
    </div>
  );
}
