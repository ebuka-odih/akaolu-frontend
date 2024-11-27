import "./globals.css";
import Navbar from '@/app/layout/navbar';
import Footer from '@/app/layout/footer';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body className="bg-gray-200">
        <div className="flex flex-col min-h-screen">
            <Navbar/>
                <main className="flex-grow">{children}</main>
            <Footer/>
        </div>
    </body>
    </html>
  );
}