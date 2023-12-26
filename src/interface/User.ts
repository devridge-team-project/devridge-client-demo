export interface SsoUser {
  id: number;
  name: string;
  email: string;
  phone: string;
  birthday: [number, number, number];
  zipCode: string;
  addr: [string, string];
  createdAt: Date;
}
export interface OlympiadUser {
  id: number;
  school: string;
  academies: string[];
  info: string;
  status: Object;
}

export interface UserInfo extends SsoUser, OlympiadUser {}
