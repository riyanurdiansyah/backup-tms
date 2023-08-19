import Sidebar from "@/components/Sidebar";
import { BodyWrapper, ContentWrapper, LayoutContainer } from "../Styled";
import Topbar from "@/components/Topbar";
import { redirect } from "next/navigation";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default async function DashboardLayout({ children }: Props) {
  const session = await getServerSession(authOptions);
  if (!session?.user) redirect("/admin/login");
  return (
    <>
      <LayoutContainer>
        <Sidebar />
        <ContentWrapper>
          <Topbar />
          <BodyWrapper>{children}</BodyWrapper>
        </ContentWrapper>
      </LayoutContainer>
    </>
  );
}
