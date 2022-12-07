import React, { FC, useEffect, useState } from "react";
import styled from "styled-components";
import images from "../../../assets/images";
import {IPropsStyle} from '../../../utils/interfaces'

interface IPaginationProps {
  currentPage: number;
  pageNumber: number;
  callback: Function;
}
const PaginationWrapper = styled.div`
  width: 68%;
  font-size: 0.75rem;
  color: #31528f;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const SwitchedButton = styled.button`
  border: none;
`;

const SwitchArrow = styled.img<IPropsStyle>`
  width: 16px;
  height: 18px;
  rotate: ${(props) => props.rotate || "0deg"};
`;
const SwitchWrapper = styled.div`
/* border: 1px solid; */
display: flex;
`;

export const Pagination: FC<IPaginationProps> = ({
  currentPage,
  pageNumber,
  callback,
}) => {
  return (
    <PaginationWrapper>
      <h1>
        strona : {currentPage} z {pageNumber}
      </h1>
      <SwitchWrapper>
        <SwitchedButton onClick={() => callback("prev")}>
          <SwitchArrow rotate='180deg' src={images.dropdownIcon} />
        </SwitchedButton>
        <SwitchedButton onClick={() => callback("next")}>
          <SwitchArrow src={images.dropdownIcon} />
        </SwitchedButton>
      </SwitchWrapper>
    </PaginationWrapper>
  );
};
