import { CatalogType } from '@/constants';
import { request } from '@umijs/max';
import { DataNode } from 'antd/lib/tree';

export async function getEntryPoint(nomalizedName: string) {
  return request(`catalog/entry/${nomalizedName}`);
}

export async function getCatalog(id: string | undefined) {
  return request<API.Catalog>(`catalog/${id}`);
}

export async function addCatalog(data: API.Catalog) {
  return request('catalog/add', {
    method: 'POST',
    data,
  });
}

export async function listCatalog(params: {
  current?: number;
  pageSize?: number;
  type: CatalogType;
}) {
  return request('catalog/list', {
    method: 'GET',
    params,
  });
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

export async function treeDrop(data: any) {
  return request(`catalog/tree-drop`, {
    method: 'POST',
    data,
  });
}

export async function queryViewCount() {
  return request(`catalog/view-count`);
}

export async function activeCatalog(id: string | undefined) {
  return request(`catalog/active/${id}`, {
    method: 'POST',
  });
}

export async function articleSaveAsync(data: API.Catalog) {
  return request(`catalog/article/save`, {
    method: 'POST',
    data,
  });
}

export async function updateThumbnail(data: API.Catalog) {
  return request(`catalog/update-thumbnail`, {
    method: 'POST',
    data,
  });
}
