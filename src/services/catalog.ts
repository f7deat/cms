import { request } from '@umijs/max';
import { DataNode } from 'antd/lib/tree';

export async function addCatalog(data: API.Catalog) {
  return request('https://localhost:7131/api/catalog/add', {
    method: 'POST',
    data,
  });
}

export async function listCatalog() {
  return request('https://localhost:7131/api/catalog/list');
}

export async function listTree() {
  return request<DataNode[]>('https://localhost:7131/api/catalog/tree');
}

export async function deleteCatalog(id: string | undefined) {
  return request(`https://localhost:7131/api/catalog/delete/${id}`, {
    method: 'POST',
  });
}
