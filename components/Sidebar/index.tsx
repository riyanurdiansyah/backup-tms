"use client";

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
import { usePathname, useRouter } from "next/navigation";

const Sidebar = () => {
  const router = useRouter();
  const pathname = usePathname();

  const menuActive = (selected: any) => {
    if (pathname == selected) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <SidebarLayout>
      <SidebarHeader>
        <Image
          src={LogoColab}
          alt=""
          layout="responsive"
          objectFit="contain"
          onClick={() => router.push("/admin")}
        />
      </SidebarHeader>
      <MenuContainer>
        <ParentListMenu>
          {MenuAdmin?.map((parent: any, index: number) => (
            <ParentItemMenu key={index}>
              <TitleParentMenu>{parent?.nameParent}</TitleParentMenu>
              <ChildMenuList>
                {parent?.child?.map((child: any, index: number) => (
                  <ChildItemMenu key={index}>
                    <LMenuChild
                      href={child?.url}
                      className={`${menuActive(child?.url) && "active"}`}
                    >
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
        nameChild: "Vehicle",
        url: "/admin/products/vehicle",
      },
      {
        nameChild: "Category Vehicle",
        url: "/admin/products/category-vehicle",
      },
      {
        nameChild: "Content Vehicle",
        url: "/admin/products/content-vehicle",
      },
      {
        nameChild: "Detail Vehicle",
        url: "/admin/products/detail-vehicle",
      },
    ],
  },
  {
    nameParent: "Service & Tools",
    child: [
      {
        nameChild: "Owners Manual Book",
        url: "/admin/service-and-tools/owners-manual-book",
      },
      {
        nameChild: "Warranty & KSG",
        url: "/admin/service-and-tools/warranty-and-ksg",
      },
      {
        nameChild: "Brochure",
        url: "/admin/service-and-tools/brochure",
      },
    ],
  },
  {
    nameParent: "Contacts",
    child: [
      {
        nameChild: "TMS Isuzu Network",
        url: "/admin/contacts/tms-isuzu-network",
      },
      {
        nameChild: "Social Media",
        url: "/admin/contacts/social-media",
      },
    ],
  },
  {
    nameParent: "Others",
    child: [
      {
        nameChild: "Career",
        url: "/admin/others/career",
      },
      {
        nameChild: "Slider Homepage",
        url: "/admin/others/slider-homepage",
      },
    ],
  },
];

export default Sidebar;
