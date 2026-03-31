"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

// ↓ 受信するメールアドレスに変更してください
const TO_EMAIL = "beautysalon.hatto@gmail.com";

type ContactState = {
  success: boolean;
  message: string;
} | null;

export async function sendContact(
  _prevState: ContactState,
  formData: FormData
): Promise<ContactState> {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const phone = (formData.get("phone") as string) || "未入力";
  const message = formData.get("message") as string;

  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return { success: false, message: "必須項目を入力してください。" };
  }

  try {
    await resend.emails.send({
      from: "HATTO お問い合わせ <onboarding@resend.dev>",
      to: TO_EMAIL,
      subject: `【お問い合わせ】${name}様より`,
      text: `お名前: ${name}\nメールアドレス: ${email}\n電話番号: ${phone}\n\nお問い合わせ内容:\n${message}`,
    });

    return {
      success: true,
      message:
        "お問い合わせを受け付けました。内容を確認の上、ご連絡いたします。",
    };
  } catch (e) {
    console.error(e);
    return {
      success: false,
      message:
        "送信中にエラーが発生しました。しばらくしてから再度お試しいただくか、LINEまたはお電話にてご連絡ください。",
    };
  }
}
