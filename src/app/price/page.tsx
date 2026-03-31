import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "料金 | HATTO",
  description: "HATTOの着付け・ヘアメイク料金一覧。振袖・袴・浴衣の着付けからヘアセット・フルメイクまで。",
};

const BOOKING_URL =
  "https://beauty.hotpepper.jp/CSP/bt/reserve/?storeId=H000352141&ch=5&vos=cphpbprocap0130408001";

type PriceItem = {
  name: string;
  price: string;
  time?: string;
  note?: string;
};

type Section = {
  title: string;
  subtitle?: string;
  items: PriceItem[];
  notes?: string[];
};

const sections: Section[] = [
  {
    title: "着付けのみ",
    subtitle: "※他のメニューはホットペッパーをご覧ください",
    items: [
      { name: "振袖", price: "15,000円", time: "施術時間30分" },
      { name: "留め袖", price: "15,000円", time: "施術時間30分" },
      {
        name: "訪問着／小紋／紬等",
        price: "12,000円",
        time: "施術時間30分",
      },
      { name: "女性袴", price: "12,000円", time: "施術時間30分" },
      {
        name: "女性浴衣",
        price: "4,000円",
        time: "施術時間30分",
        note: "浴衣の中に長襦袢を着用の場合は訪問着のお値段になります。",
      },
    ],
    notes: [
      "お着物がレンタルかご持参か事前にお知らせください。",
      "お着物は「事前郵送」「事前お持ち込み」「事前に画像を送って頂いての当日お持ち込み」がございます。",
      "新品のお着物や小物等はタグやしつけ糸を外した状態でご来店ください。",
      "女性専用サロンとなりますので、男性のご予約はお断りいたします。",
    ],
  },
  {
    title: "ヘアメイク",
    items: [
      {
        name: "ヘアセット＋フルメイク",
        price: "9,000円",
        time: "施術時間60分",
        note: "指名料あり",
      },
      { name: "日本髪", price: "15,000円", time: "施術時間45分", note: "指名料なし" },
      {
        name: "ヘアメイクリハーサルのみ",
        price: "16,500円",
        time: "2時間",
        note: "海外挙式前、ヘアメイクリハーサル前に試したい髪型がある方、婚礼会場でヘアメイクリハーサルがない方にオススメ。延長はプラス30分3,000円。",
      },
    ],
  },
  {
    title: "卒業式（セットメニュー）",
    items: [
      {
        name: "袴着付け＋ヘア＋メイク",
        price: "23,000円",
        note: "早朝料金別途",
      },
      { name: "袴着付け＋ヘア", price: "16,000円", note: "早朝料金別途" },
    ],
  },
  {
    title: "成人式",
    subtitle:
      "成人式当日、前日、前々日は下記の金額となります",
    items: [
      {
        name: "振袖着付け＋ヘア＋メイク",
        price: "36,800円",
        note: "早朝料金別途",
      },
      { name: "振袖着付け＋ヘア", price: "32,800円", note: "早朝料金別途" },
    ],
  },
  {
    title: "浴衣着付（セットメニュー）",
    subtitle:
      "お荷物・お召しのお預かり、お戻りになられてのお着替えはお断りしております。",
    items: [
      {
        name: "アレンジ帯浴衣着付け＋ヘアセット",
        price: "8,000円",
        note: "浴衣の持ち込みのみ",
      },
      {
        name: "アレンジ帯浴衣着付け＋ヘアセット＋フルメイク",
        price: "13,000円",
        note: "浴衣の持ち込みのみ",
      },
    ],
  },
  {
    title: "七五三メニュー",
    items: [
      {
        name: "詳細はLINEにてお問い合わせください",
        price: "—",
      },
    ],
    notes: [
      "事前決済後にご予約完了となります。仮予約はできかねます。",
      "ご予約日3週間前からキャンセル料が100%掛かります。お子様の体調不良・天候での日時変更は出来かねますのでご了承ください。",
      "ご予約後に連絡が取れない場合、事前決済に応じて頂けない場合はキャンセルとなります。",
      "お荷物やお洋服のお預かりは行っておりません。お戻りになられてのお着替えもお断りいたします。",
      "七五三のお問い合わせはお店のLINEのみとなります。お電話対応はできかねます。",
    ],
  },
];

export default function PricePage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      {/* Header */}
      <div className="text-center mb-12">
        <p className="text-xs tracking-[0.3em] text-[#f78da7] mb-2 uppercase">
          Menu / Price
        </p>
        <h1 className="text-2xl font-bold text-[#333] tracking-wide mb-3">
          サービス料金（税込）
        </h1>
        <p className="text-sm text-[#666]">
          Webでのクーポン利用がお得です
        </p>
      </div>

      {/* Early morning surcharge */}
      <div className="bg-[#fdf7f9] border border-[#f0d0d8] rounded-2xl p-5 mb-10 text-sm text-[#555] leading-relaxed">
        <p className="font-semibold text-[#333] mb-2">早朝料金（税込）</p>
        <ul className="space-y-1">
          <li>AM6:30〜AM7:00　＋3,300円</li>
          <li>AM7:00〜AM9:00　＋2,200円</li>
          <li>AM9:00〜AM10:00　＋1,200円</li>
        </ul>
      </div>

      {/* Sections */}
      <div className="space-y-14">
        {sections.map((section) => (
          <section key={section.title}>
            <h2 className="text-base font-bold text-[#333] border-b border-[#f0d0d8] pb-2 mb-4">
              {section.title}
            </h2>
            {section.subtitle && (
              <p className="text-xs text-[#888] mb-4">{section.subtitle}</p>
            )}

            <div className="space-y-4">
              {section.items.map((item) => (
                <div
                  key={item.name}
                  className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 py-3 border-b border-[#f5f5f5] last:border-0"
                >
                  <div className="flex-1">
                    <p className="text-sm font-medium text-[#333]">
                      {item.name}
                    </p>
                    {item.time && (
                      <p className="text-xs text-[#888] mt-0.5">{item.time}</p>
                    )}
                    {item.note && (
                      <p className="text-xs text-[#888] mt-0.5">{item.note}</p>
                    )}
                  </div>
                  <p className="text-sm font-bold text-[#333] sm:text-right whitespace-nowrap">
                    {item.price}
                  </p>
                </div>
              ))}
            </div>

            {section.notes && (
              <ul className="mt-4 space-y-1">
                {section.notes.map((note, i) => (
                  <li key={i} className="text-xs text-[#888] flex gap-1">
                    <span>・</span>
                    <span>{note}</span>
                  </li>
                ))}
              </ul>
            )}
          </section>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-16 text-center">
        <p className="text-sm text-[#666] mb-6">
          ご不明な点はお気軽にお問い合わせください
        </p>
        <a
          href={BOOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[#f78da7] text-white px-10 py-3 rounded-full text-sm font-medium hover:bg-[#f06292] transition-colors"
        >
          ホットペッパービューティーで予約
        </a>
      </div>
    </div>
  );
}
