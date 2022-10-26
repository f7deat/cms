import { request } from '@umijs/max';

export async function addCatalog(data: API.Catalog) {
  return request('https://localhost:7131/api/catalog/add', {
    method: 'POST',
    data,
  });
}

export async function listCatalog() {
  const data: API.Catalog[] = [
    {
      name: 'Home',
      normalizedName: 'home',
    },
  ];
  return data;
  return request('https://localhost:7131/api/catalog/list');
}
