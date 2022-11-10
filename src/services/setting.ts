import { request } from '@umijs/max';

export async function listSetting() {
  return request(`appsetting/list`);
}

export async function upgrade() {
  return request(`appsetting/upgrade`, {
    method: 'POST',
  });
}
