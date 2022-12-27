import { request } from '@umijs/max';

export function listComponent() {
  return request(`component/list-all`);
}

export function addComponent(data: any) {
  return request(`component/add`, {
    method: 'POST',
    data,
  });
}
