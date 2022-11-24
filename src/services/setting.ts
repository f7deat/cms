import { request } from '@umijs/max';

export async function listSetting() {
  return request(`appsetting/list`);
}
