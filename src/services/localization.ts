import { request } from '@umijs/max';

export async function listLocalization() {
  return request(`localization/list`);
}

export async function addLocalization(data: any) {
  return request(`localization/add`, {
    method: 'POST',
    data,
  });
}

export async function saveLocalization(data: any) {
  return request(`localization/save`, {
    method: 'POST',
    data,
  });
}
