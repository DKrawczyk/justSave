import { FC } from "react";
import {
  EmployeeDetails,
  EmployeeImage,
  ListWrapper,
  ShortHeader,
  ShortText,
  SingleEmployeeWrapper,
} from "../../atoms";

interface SingleEmployeeProps {
  employeeList: any;
}

export const SingleEmployee: FC<SingleEmployeeProps> = ({ employeeList }) => {
  const employees = employeeList?.map((el: any, idx: any) => {
    return (
      <SingleEmployeeWrapper key={idx}>
        {el.imgUrl ? <EmployeeImage src={el.imgUrl} /> : "alt"}
        <EmployeeDetails>
          <ShortHeader>{el.employee}</ShortHeader>
          <ShortText whiteSpace={"nowrap"} fontSize={"0.85rem"}>
            {el.jobTitle}
          </ShortText>
          <ShortText whiteSpace={"nowrap"} fontSize={"0.85rem"}>
            {el.position}
          </ShortText>
        </EmployeeDetails>
      </SingleEmployeeWrapper>
    );
  });

  return <ListWrapper>{employees}</ListWrapper>;
};
