import React from "react";
import {
  ChildItemMenu,
  ChildMenuList,
  LMenuChild,
  MenuContainer,
  ParentItemMenu,
  ParentListMenu,
  SidebarHeader,
  SidebarLayout,
  TitleParentMenu,
} from "./Styled";
import LogoColab from "./logo-colab.png";
import Image from "next/image";

const Sidebar = () => {
  return (
    <SidebarLayout>
      <SidebarHeader>
        <Image src={LogoColab} alt="" layout="responsive" objectFit="contain" />
      </SidebarHeader>
      <MenuContainer>
        <ParentListMenu>
          {MenuAdmin?.map((parent: any, index: number) => (
            <ParentItemMenu key={index}>
              <TitleParentMenu>{parent?.nameParent}</TitleParentMenu>
              <ChildMenuList>
                {parent?.child?.map((child: any, index: number) => (
                  <ChildItemMenu key={index}>
                    <LMenuChild href={child?.url}>
                      {child?.nameChild}
                    </LMenuChild>
                  </ChildItemMenu>
                ))}
              </ChildMenuList>
            </ParentItemMenu>
          ))}
        </ParentListMenu>
      </MenuContainer>
    </SidebarLayout>
  );
};

const MenuAdmin = [
  {
    nameParent: "Products",
    child: [
      {
        nameChild: "Cars",
        url: "",
      },
      {
        nameChild: "Detail",
        url: "",
      },
    ],
  },
  {
    nameParent: "Service & Tools",
    child: [
      {
        nameChild: "Owners Manual Book",
        url: "",
      },
      {
        nameChild: "Warranty & KSG",
        url: "",
      },
      {
        nameChild: "Brochure",
        url: "",
      },
    ],
  },
  {
    nameParent: "Contact Us",
    child: [
      {
        nameChild: "TMS Isuzu Network",
        url: "",
      },
      {
        nameChild: "Social Media",
        url: "",
      },
    ],
  },
  {
    nameParent: "Others",
    child: [
      {
        nameChild: "Career",
        url: "",
      },
      {
        nameChild: "Social Media",
        url: "",
      },
    ],
  },
];

export default Sidebar;
