import Sidebar from "@/components/Sidebar";
import { BodyWrapper, ContentWrapper, LayoutContainer } from "./Styled";
import Topbar from "@/components/Topbar";

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
