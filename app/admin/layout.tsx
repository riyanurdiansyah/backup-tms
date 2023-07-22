import Sidebar from "@/components/Sidebar";
import { BodyWrapper, ContentWrapper, LayoutContainer } from "./Styled";
import Topbar from "@/components/Topbar";
import "primeicons/primeicons.css";
import "primereact/resources/primereact.min.css"; //core css
import "primereact/resources/themes/lara-light-indigo/theme.css"; //theme

export default function AdminLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
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
