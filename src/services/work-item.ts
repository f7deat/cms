import { request } from '@umijs/max';
import React from 'react';

export async function addWorkItem(data: any) {
  return request(`https://localhost:7131/api/workItem/add`, {
    method: 'POST',
    data,
  });
}

export async function listWorkItem(ids: React.Key[]) {
  return request(`https://localhost:7131/api/workItem/list/${ids[0]}`);
}

export async function updateTitle(data: any) {
  return request(`https://localhost:7131/api/workItem/save/title`, {
    method: 'POST',
    data,
  });
}

export async function updateWorkItem(data: any) {
  return request(`https://localhost:7131/api/workItem/save`, {
    method: 'POST',
    data,
  });
}

export async function getWorkItem(id: string | undefined) {
  return request(`https://localhost:7131/api/workItem/${id}`);
}

export async function saveWorkItem(data: API.WorkItem) {
  return request(`https://localhost:7131/api/workItem/save`, {
    method: 'POST',
    data,
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
