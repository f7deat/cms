import { request } from '@umijs/max';

export async function listFile() {
  return request(`file/list`);
}
