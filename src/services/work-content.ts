import { request } from '@umijs/max';
import React from 'react';

export async function addWorkContent(data: any) {
  return request(`https://localhost:7131/api/workContent/add`, {
    method: 'POST',
    data,
  });
}

export async function listWorkContent(params: React.Key[]) {
  return request(`https://localhost:7131/api/workContent/list/${params[0]}`);
}

export async function updateTitle(data: any) {
  return request(`https://localhost:7131/api/workContent/save/title`, {
    method: 'POST',
    data,
  });
}

export async function updateWorkContent(data: any) {
  return request(`https://localhost:7131/api/workContent/save`, {
    method: 'POST',
    data,
  });
}

export async function getWorkContent(id: string | undefined) {
  return request(`https://localhost:7131/api/workContent/${id}`);
}

export async function saveWorkContent(data: API.WorkItem) {
  return request(`https://localhost:7131/api/workContent/save`, {
    method: 'POST',
    data,
  });
}

export async function deleteWorkContent(id: string) {
  return request(`https://localhost:7131/api/workContent/delete/${id}`, {
    method: 'POST',
  });
}

export async function listCss() {
  return request(`https://localhost:7131/api/style/list`);
}

export async function addCss(data: API.WorkItem) {
  data.sortOrder = Number(data.sortOrder);
  return request(`https://localhost:7131/api/style/add`, {
    method: 'POST',
    data,
  });
}

export async function getCss(id: string | undefined) {
  return request(`https://localhost:7131/api/style/${id}`);
}

export async function saveCss(data: API.WorkItem) {
  return request(`https://localhost:7131/api/style/save`, {
    method: 'POST',
    data,
  });
}

export async function deleteCss(id: string) {
  return request(`https://localhost:7131/api/style/delete/${id}`, {
    method: 'POST',
  });
}
