"use client";

import Sidebar from "@/components/Sidebar";
import { BodyWrapper, ContentWrapper, LayoutContainer } from "./Styled";
import Topbar from "@/components/Topbar";
import "primeicons/primeicons.css";
import "primereact/resources/primereact.min.css"; //core css
import "primereact/resources/themes/lara-light-indigo/theme.css"; //theme
import { usePathname } from "next/navigation";

export default function AdminLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const pathParts = pathname.split("/");
  const lastPathname = pathParts.pop();

  if (lastPathname == "login") {
    return children;
  }

  return (
    <LayoutContainer>
      <Sidebar />
      <ContentWrapper>
        <Topbar />
        <BodyWrapper>{children}</BodyWrapper>
      </ContentWrapper>
    </LayoutContainer>
  );
}
