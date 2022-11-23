import { request } from '@umijs/max';

export async function login(data: any) {
  return request(`user/password`, {
    method: 'POST',
    data,
  });
}
