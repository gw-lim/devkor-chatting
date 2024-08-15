export interface ProfileType {
  id: number;
  name: string;
  email: string;
  introduce?: string;
  profileImage?: string;
}

export interface UserType {
  id: number;
  name: string;
  profileImage?: string;
}

export interface ChattingRoomType {
  user: UserType;
  lastChat: string;
  time: string;
}

export interface ChatType {
  user: { id: number; nickname: string; profileImage?: string };
  value: string;
}
