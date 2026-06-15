import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Jigar Parmar | AI/ML Engineer & AI Automation Developer',
  description: 'AI/ML Engineer specializing in Machine Learning, Deep Learning, Power BI, AI Automation, Activepieces, n8n and intelligent workflow automation.',
  metadataBase: new URL('https://jigar-portfolio.example'),
  openGraph: {
    title: 'Jigar Parmar | AI/ML Engineer & AI Automation Developer',
    description: 'AI/ML Engineer specializing in Machine Learning, Deep Learning, Power BI, AI Automation, Activepieces, n8n and intelligent workflow automation.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
