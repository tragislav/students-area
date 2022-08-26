export interface IAuth {
  access_token: string;
  email: string;
  expires_in: number;
  fio: string;
  id_from_source: number;
  jti: string;
  refresh_token: string;
  scope: string;
  token_type: string;
  roles: Array<string>;
}
