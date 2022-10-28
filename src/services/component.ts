import { request } from '@umijs/max';

export function listComponent() {
  return request(`https://localhost:7131/api/component/list`);
}

export function addComponent(data: any) {
  return request(`https://localhost:7131/api/component/add`, {
    method: 'POST',
    data,
  });
}
