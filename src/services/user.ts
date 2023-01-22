import { request } from '@umijs/max';

export async function login(data: any) {
  return request(`user/password-sign-in`, {
    method: 'POST',
    data,
  });
}

export async function queryCurrentUser() {
  return request(`user`);
}

export async function getUser(id: string | undefined) {
  return request(`user/${id}`);
}

export async function createUser(data: any) {
  return request(`user/create`, {
    method: 'POST',
    data,
  });
}

export async function listUser() {
  return request(`user/list`);
}

export async function changePassword(data: any) {
  return request(`user/change-password`, {
    method: 'POST',
    data,
  });
}
