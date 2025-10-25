import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'The End - Porsche 911 GT3 RS',
  description: 'موقع مخصص لسيارة Porsche 911 GT3 RS، حيث نغطي مواصفاتها، تاريخها, تطورها, إنجازاتها في السباقات, والتعديلات الشائعة.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap" rel="stylesheet" />
      </head>
      <body className={cn("font-body bg-background text-foreground antialiased")}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
