import { FC } from "react";
import { INewsProps } from "../../../utils/interfaces";
import { MainNewsImage, MainNewsImgWrapper } from "../../atoms";

export const MainImage: FC<INewsProps> = ({ news }) => {
  return (
    <MainNewsImgWrapper>
      <MainNewsImage image={news} />
    </MainNewsImgWrapper>
  );
};
