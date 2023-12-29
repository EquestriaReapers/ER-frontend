export interface User {
  id: number;
  name: string;
  lastname: string;
  mainTitle: string;
  email: string;
  verified: boolean;
  role: Role;
  deletedAt: Date | null;
}

export enum Role {
  Graduate = "graduate",
  Admin = "admin",
}
