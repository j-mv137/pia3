import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Open_Sans } from "next/font/google";

const openSans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${openSans.className} antialiased`}>
        <main>
          <header className="w-full pt-10 md:px-10 px-4">
            <div className="flex flex-col items-center justify-center">
              <h1 className="text-center font-semibold text-2xl mb-2">
                Niveles de Actividad física y rendimiento académico
              </h1>
              {/* <div className="w-full h-0.5 bg-neutral-300" /> */}
            </div>
          </header>
          {children}
        </main>
        <Toaster />
      </body>
    </html>
  );
}
