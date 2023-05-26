import { GunUser, ISEAPair } from "gun/types";

export type CreateUserResult = {
  ok?: 0,
  pub?: string,
  err?: string
}

export type AuthenticateResult = {
  ack?: 2;
  soul?: string;
  get?: string;
  put?: GunUser;
  sea?: ISEAPair;
  err?: string;
}