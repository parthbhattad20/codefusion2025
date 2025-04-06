import './globals.css';
import FloatingNavbar from '../components/Navbar';

export const metadata = {
  title: 'Vulnuris',
  description: 'Find > Fix > Fortify',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
        suppressHydrationWarning
      >
        <FloatingNavbar />
        {children}
      </body>
    </html>
  );
}
