"use client";

import { useActionState } from "react";
import { sendContact } from "@/app/actions";

export default function ContactForm() {
  const [state, action, pending] = useActionState(sendContact, null);

  if (state?.success) {
    return (
      <div className="bg-[#fdf7f9] border border-[#f0d0d8] rounded-2xl p-8 text-center">
        <p className="text-2xl mb-3">✉️</p>
        <p className="text-sm font-medium text-[#333] mb-2">
          お問い合わせを受け付けました
        </p>
        <p className="text-sm text-[#666]">{state.message}</p>
      </div>
    );
  }

  return (
    <form action={action} className="space-y-5">
      {state && !state.success && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
          {state.message}
        </div>
      )}

      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-[#333] mb-1"
        >
          お名前 <span className="text-[#f78da7]">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="w-full border border-[#ddd] rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#f78da7] transition-colors"
          placeholder="山田 花子"
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-[#333] mb-1"
        >
          メールアドレス <span className="text-[#f78da7]">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full border border-[#ddd] rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#f78da7] transition-colors"
          placeholder="example@email.com"
        />
      </div>

      <div>
        <label
          htmlFor="phone"
          className="block text-sm font-medium text-[#333] mb-1"
        >
          電話番号
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          className="w-full border border-[#ddd] rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#f78da7] transition-colors"
          placeholder="03-xxxx-xxxx"
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-[#333] mb-1"
        >
          お問い合わせ内容 <span className="text-[#f78da7]">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          className="w-full border border-[#ddd] rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#f78da7] transition-colors resize-none"
          placeholder="ご予約に関するご質問、その他お問い合わせ内容をご記入ください。"
        />
      </div>

      <button
        type="submit"
        disabled={pending}
        className="w-full bg-[#f78da7] text-white py-3 rounded-full text-sm font-medium hover:bg-[#f06292] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {pending ? "送信中..." : "送信する"}
      </button>
    </form>
  );
}
