import { request } from '@umijs/max';
import React from 'react';

export async function addWorkContent(data: any) {
  return request(`workContent/add`, {
    method: 'POST',
    data,
  });
}

export async function listWorkContent(params: React.Key[]) {
  return request(`workContent/list/${params[0]}`);
}

export async function updateTitle(data: any) {
  return request(`workContent/save/title`, {
    method: 'POST',
    data,
  });
}

export async function updateWorkContent(data: any) {
  return request(`workContent/save`, {
    method: 'POST',
    data,
  });
}

export async function getWorkContent(id: string | undefined) {
  return request(`workContent/${id}`);
}

export async function saveWorkContent(data: API.WorkItem) {
  return request(`workContent/save`, {
    method: 'POST',
    data,
  });
}

export async function deleteWorkContent(
  workContentId: string,
  catalogId: React.Key,
) {
  return request(`workContent/delete`, {
    method: 'POST',
    data: {
      workContentId,
      catalogId,
    },
  });
}

export async function listCss() {
  return request(`style/list`);
}

export async function addCss(data: API.WorkItem) {
  data.sortOrder = Number(data.sortOrder);
  return request(`style/add`, {
    method: 'POST',
    data,
  });
}

export async function getCss(id: string | undefined) {
  return request(`style/${id}`);
}

export async function saveCss(data: API.WorkItem) {
  return request(`style/save`, {
    method: 'POST',
    data,
  });
}

export async function deleteCss(id: string) {
  return request(`style/delete/${id}`, {
    method: 'POST',
  });
}

export async function uploadImage(id: string) {
  return request(`image/upload/${id}`, {
    method: 'POST',
  });
}

export async function getImage(id: string | undefined) {
  return request<API.Image>(`image/${id}`);
}

export async function saveImage(data: API.Image) {
  return request(`image/save`, {
    method: 'POST',
    data,
  });
}
