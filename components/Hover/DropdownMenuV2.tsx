"use client";
import React, { FC } from "react";
import { ItemMenuDropdown, ListMenuDropdown } from "./Styled";

const DropdownMenuV2: FC<IDropdownMenuV2> = ({
  dataMenu,
  handleClickDropdown,
}) => {
  return (
    <ListMenuDropdown>
      {dataMenu?.map((item: any, index: any) => {
        return (
          <ItemMenuDropdown
            key={index}
            onClick={() => handleClickDropdown(item)}
          >
            {item?.name || item}
          </ItemMenuDropdown>
        );
      })}
    </ListMenuDropdown>
  );
};

interface IDropdownMenuV2 {
  dataMenu: any;
  handleClickDropdown: (e: any) => void;
}

export default DropdownMenuV2;
