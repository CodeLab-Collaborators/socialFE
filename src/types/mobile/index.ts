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
