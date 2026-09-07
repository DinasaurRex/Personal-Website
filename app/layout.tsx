import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Dina Saab | Little Ray of Dina',
  description:
    'Personal website for Dina Saab, an electrical engineering student building hardware, embedded systems, and useful web tools.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
