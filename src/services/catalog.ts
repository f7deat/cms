import { request } from '@umijs/max';

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
  return request('https://localhost:7131/api/catalog/tree');
}

export async function deleteCatalog(id: string | undefined) {
  return request(`https://localhost:7131/api/catalog/delete/${id}`, {
    method: 'POST',
  });
}
