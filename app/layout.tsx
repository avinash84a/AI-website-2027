import type {Metadata} from 'next';
import './globals.css'; // Global styles

export const metadata: Metadata = {
  title: 'AI Tools Marathi – AI सोप्या मराठीत',
  description: 'ChatGPT पासून AI Automation पर्यंत — प्रत्येक AI Tool सोप्या मराठीत, प्रत्यक्ष उदाहरणांसह शिका.',
  openGraph: {
    title: 'AI Tools Marathi – AI सोप्या मराठीत',
    description: 'ChatGPT पासून AI Automation पर्यंत — प्रत्येक AI Tool सोप्या मराठीत, प्रत्यक्ष उदाहरणांसह शिका.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Tools Marathi – AI सोप्या मराठीत',
    description: 'ChatGPT पासून AI Automation पर्यंत — प्रत्येक AI Tool सोप्या मराठीत, प्रत्यक्ष उदाहरणांसह शिका.',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
