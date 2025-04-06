import './globals.css';
import FloatingNavbar from '../components/Navbar';
import { ThemeProvider } from '@/components/ThemeProvider';

export const metadata = {
  title: 'Vulnuris',
  description: 'Find > Fix > Fortify',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`antialiased`}
        suppressHydrationWarning
      >
        <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
          <FloatingNavbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
