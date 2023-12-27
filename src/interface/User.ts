export interface UserProps {
  id: number;
  name: string;
  email: string;
  phone: string;
  birthday: [number, number, number];
  zipCode: string;
  addr: [string, string];
  createdAt: Date;
}
