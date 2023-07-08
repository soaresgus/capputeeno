import { Header } from '@/components/Header';
import './global.css';
import StyledComponentsRegistry from '@/lib/StyledComponentsRegistry';
import { Saira } from 'next/font/google';
import { Providers } from '@/providers';

const saira = Saira({ subsets: ['latin'], weight: ['300', '400', '600'] });

export const metadata = {
  title: 'Capputeeno',
  description: 'E-Commerce',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className={saira.className}>
        <Providers>
          <StyledComponentsRegistry>
            <Header />
            <main>{children}</main>
          </StyledComponentsRegistry>
        </Providers>
      </body>
    </html>
  );
}
