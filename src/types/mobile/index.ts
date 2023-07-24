export type iCon = {
  width?: string;
  icon: any;
  color?: string;
  size: string;
};

export type iProfile = {
  size?: string;
  avatar?: any;
};

export type iMore = {
  icon: any;
  text: string;
  size: string;
  iconColor: string;
  backgroundColor: string;
};

export type iConAndText = {
  icon: any;
  text: string;
  size: string;
  iconColor?: string;
  textColor?: string;
};

export interface iPostHeading {
  name: string;
  time: string;
  title: string;
}

export interface iPosts extends iPostHeading {
  profilePhoto: any;
  postCover: any;
  comments: number;
  rePosts: number;
  views: number;
  reactions: number;
}

export type iRecent = {
  avatar: any;
  name: string;
  userName: string;
};

export type iSuggest = {
  suggestion: string;
};

export type iSinglePostTitle = {
  avatar: any;
  name: string;
  time: string;
};

export type iPostTexts = {
  message1: string;
  message2: string;
};

export type iComment = {
  avatar: any;
  name: string;
  time: string;
  comment: string;
  replies: string;
  views: string;
};

export type imageProp = {
  image: string;
  alt: string;
  onCancel: () => void;
};

export type imgData = {
  setImages: React.Dispatch<React.SetStateAction<string[]>>;
  icon: any;
  css: string;
};
