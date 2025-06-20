// app/layout.jsx
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/page';
import './globals.css';


export const metadata = {
  title: 'My App',
  description: 'A simple Next.js app',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
