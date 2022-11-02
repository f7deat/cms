import { request } from '@umijs/max';
import { DataNode } from 'antd/lib/tree';

export async function addCatalog(data: API.Catalog) {
  return request('catalog/add', {
    method: 'POST',
    data,
  });
}

export async function listCatalog() {
  return request('catalog/list');
}

export async function listTree() {
  return request<DataNode[]>('catalog/tree');
}

export async function deleteCatalog(id: string | undefined) {
  return request(`catalog/delete/${id}`, {
    method: 'POST',
  });
}
