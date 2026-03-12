import { checkPayment } from '../../utils/x402';

const fortunes = [
  "今日はXLMが上がるかも！？",
  "慎重に行動すると吉",
  "小さなラッキーあり",
  "今日は投資は控えめに",
  "XLMの流れに乗れる日"
];

export default async function handler(req, res) {
  const paid = await checkPayment(req);
  if (!paid) return res.status(402).json({ error: "Payment required" });
  const result = fortunes[Math.floor(Math.random() * fortunes.length)];
  res.status(200).json({ fortune: result });
}
