import { request } from '@umijs/max';
import { DataNode } from 'antd/lib/tree';

export async function getCatalog(id: string | undefined) {
  return request<API.Catalog>(`catalog/${id}`);
}

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

export async function saveCatalog(data: API.Catalog) {
  return request(`catalog/save`, {
    method: 'POST',
    data,
  });
}
