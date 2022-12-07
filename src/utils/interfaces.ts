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

export interface IPropsStyle {
  left?: string;
  top?: string;
  right?: string;
  image?: any;
  fontFamily?: string;
  rotate?: string;
  width?: string;
}

export interface INewsProps {
  news: {
    id: number;
    url: string;
    title: string;
    content: string;
    data: string;
    tag: string;
    imgUrl: any;
    isImportant: boolean;
  };
}

export interface ISortedNewsList {
  newsList: {
    id: number;
    url: string;
    title: string;
    content: string;
    data: string;
    tag: string;
    imgUrl: any;
    isImportant: boolean;
  }[];
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
  interestingEvents: {
    content: string;
    imgUrl: any;
    buttonUrl: string;
    created: string;
  }[];
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

export interface IHamburgerProps {
  callback: () => void;
}

export interface IMenuElementsProps {
  isMenuOpen: boolean;
}
