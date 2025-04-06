import './globals.css';
import FloatingNavbar from './components/navbar';

export const metadata = {
  title: 'Vulnuris',
  description: 'Find › Fix › Fortify',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <FloatingNavbar/>
        {children}
      </body>
    </html>
  );
}
