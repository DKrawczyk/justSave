import { FC } from "react";
import { ICustomButtonProps } from "../../../utils/interfaces";
import { CustomButtonWrapper, Button } from "../../atoms";

export const CustomButton: FC<ICustomButtonProps> = ({ text, link, style }) => {
  return (
    <CustomButtonWrapper href={link} width={style?.width}>
      <Button padding={style?.padding}>{text}</Button>
    </CustomButtonWrapper>
  );
};
