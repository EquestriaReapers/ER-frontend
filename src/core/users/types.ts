export interface User {
  id: number;
  name: string;
  email: string;
  role: Role;
  deletedAt: Date;
}

export enum Role {
  Graduate = "graduate",
  Admin = "admin",
}
