import { DefaultLayoutDesktop } from "@/components/default-layout-desktop";
import { DefaultLayoutMobile } from "@/components/default-layout-mobile";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

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
      <body className={inter.className}>
        <AntdRegistry>
          <DefaultLayoutDesktop>{children}</DefaultLayoutDesktop>
        </AntdRegistry>
      </body>
    </html>
  );
}
