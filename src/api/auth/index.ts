/* eslint-disable import/prefer-default-export */
import { api } from '..';
import { IAuth } from '../../@types/auth';

export function getToken(data: FormData) {
  return api.post<IAuth, IAuth>(
    '/authorization/token?grant_type=password',
    data,
  );
}
