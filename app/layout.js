export const metadata = {
  title: 'Philip – Digital Marketing Portfolio',
  description: 'Performance-focused digital marketing portfolio for Philip Ajao.',
};

import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-white text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100">
        {children}
      </body>
    </html>
  );
}