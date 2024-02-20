export type IUser = {
  email: string;
  username: string;
  createdAt: Date;
} | null;

export interface DefaultResponse {
  error: string | null;
  message: string;
}

export interface LoginResponse extends DefaultResponse {
  user: IUser;
}

export interface LoginBody {
  email_or_username: string;
  password: string;
}

export interface registerBody {
  email: string;
  username: string;
  password: string;
}
