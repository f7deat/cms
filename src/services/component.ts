import { request } from '@umijs/max';

export async function getComponent(id: string | undefined) {
  return request(`component/${id}`);
}

export function listAllComponent() {
  return request(`component/list-all`);
}

export function addComponent(data: any) {
  return request(`component/add`, {
    method: 'POST',
    data,
  });
}

export async function listComponent() {
  return request(`component/list`);
}

export async function listComponentWork(params: any, id: string | undefined) {
  return request(`component/list-work/${id}`, {
    params,
  });
}

export async function deleteComponent(id: string) {
  return request(`component/delete/${id}`, {
    method: 'POST',
  });
}
