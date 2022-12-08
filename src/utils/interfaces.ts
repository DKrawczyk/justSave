export enum Direction {
  previous = "prev",
  next = "next",
}

export interface ISubMenuProps {
  isOpen?: boolean;
  rotate?: string;
  top?: string;
  borderTop?: null | string;
}

export interface IHamburgerProps {
  callback: () => void;
}

export interface IMenuElementsProps {
  isMenuOpen: boolean;
}

export interface IPropsStyle {
  left?: string;
  top?: string;
  right?: string;
  image?: any;
  fontFamily?: string;
  rotate?: string;
  display?: string;
  justifyContent?: string;
  width?: string;
  topPosition?: string
  height?: string
  whiteSpace?: string
  fontSize?: string
  padding?: string
}

export interface IMockedNews {
  id: number;
  url: string;
  title: string;
  content: string;
  created: string;
  tag: string;
  imgUrl: any;
  isImportant: boolean;
}

export interface ISingleNewsProp {
  news: IMockedNews;
}

export interface ISocialMediaMock {
  socialMedias: {
    id: number;
    title: string;
    content: string;
    image: any;
    mediaLogo: any;
    created: string;
  }[];
}

export interface IJobMock {
  jobList: {
    id: number;
    jobTitle: string;
    recBonus: number;
    location: string;
    PPKUrl: string;
  }[];
}

export interface IInterestingEventMock {
  content: string;
  imgUrl: any;
  buttonUrl: string;
  created: string;
}

export interface IEmployeesList {
  employeesList?: {
    id: number;
    employee: string;
    position: string;
    dateOfStart: string;
    jobTitle: string;
    imgUrl?: string;
  }[];
}

export interface ICustomButtonProps {
  link: string;
  text: string;
  style?: {
    padding: string;
    width: string;
  };
}