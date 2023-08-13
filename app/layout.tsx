import type { Metadata } from "next";
import "../styles/global.scss";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StyledComponentsRegistry from "./registry";
import { GlobalStyle } from "../styles/styledComponents/GlobalStyled";
import { FlickityStyle } from "@/styles/styledComponents/FlickityStyled";
import ButtonHome from "@/components/ButtonHome";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <StyledComponentsRegistry>
        <GlobalStyle />
        <FlickityStyle />
        <body className={inter.className}>
          <Header />
          {children}
          <ButtonHome />
          <Footer />
        </body>
      </StyledComponentsRegistry>
    </html>
  );
}
