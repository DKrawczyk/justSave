import styled from "styled-components";

export const NewEmployeesWebpartWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 40px 16px;
  flex-direction: column;
  @media (max-width: 785px) {
    width: 100%;
  }
  @media (min-width: 786px) and (max-width: 1279px) {
    width: 50%;
  }

  @media (min-width: 1280px) {
    width: 30%;
  }
`;

export const SingleEmployeeWrapper = styled.div`
  display: flex;
  padding: 4px 0;
  @media (min-width: 786px) and (max-width: 1279px) {
    justify-content: space-around;
  }

  @media (min-width: 1280px) {
    justify-content: space-between;
  }
`;

export const EmployeeImage = styled.img`
  width: 110px;
  height: 100%;
  @media (min-width: 1280px) {
    width: 100px;
  }

`;

export const EmployeeDetails = styled.div`
  width: 68%;
  padding: 8px 0;
  @media (max-width: 785px) {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
  }
`;