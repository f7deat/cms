import { request } from '@umijs/max';

export function addWorkItem(data: any) {
  return request(`https://localhost:7131/api/workItem/add`, {
    method: 'POST',
    data,
  });
}

export function listWorkItem(id: string | undefined) {
  return request(`https://localhost:7131/api/workItem/list/${id}`);
}

export function updateTitle(data: any) {
  return request(`https://localhost:7131/api/workItem/save/title`, {
    method: 'POST',
    data,
  });
}

export function updateWorkItem(data: any) {
  return request(`https://localhost:7131/api/workItem/save`, {
    method: 'POST',
    data,
  });
}
