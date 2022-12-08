import styled from "styled-components";

export const JobOffersWebpartWrapper = styled.div`
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

export const SingleJobWrapper = styled.div`
  height: 150px;
  display: flex;
  padding: 4px 0;
  justify-content: space-between;
  flex-direction: column;
  border-bottom: 3px solid lightgray;
`;

export const JobDetails = styled.div`
  width: 68%;
  padding: 8px 0;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
