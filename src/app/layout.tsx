import { RootProvider } from '@/providers/root.provider';
import type { Metadata } from 'next';
import { DM_Sans } from 'next/font/google';
import './globals.css';
import localFont from 'next/font/local';

const sfProDisplay = localFont({
  src: [
    {
      path: '../../public/fonts/sf-pro-display/sf-pro-display-regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/sf-pro-display/sf-pro-display-medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/sf-pro-display/sf-pro-display-semibold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../public/fonts/sf-pro-display/sf-pro-display-bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-sf-pro-display',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-dm-sans',
});

export const metadata: Metadata = {
  title: 'Grab Chef',
  description: 'Centralized platform for event management',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang='en'
      data-locator-target='vscode'
    >
      <link
        rel='apple-touch-icon'
        sizes='180x180'
        href='assets/icons/apple-touch-icon.png'
      />
      <link
        rel='icon'
        type='image/png'
        sizes='32x32'
        href='assets/icons/favicon-32x32.png'
      />
      <link
        rel='icon'
        type='image/png'
        sizes='16x16'
        href='assets/icons/favicon-16x16.png'
      />
      <body
        className={`${sfProDisplay.variable} ${dmSans.variable} antialiased`}
        cz-shortcut-listen='true'
      >
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
