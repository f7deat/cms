import { request } from '@umijs/max';
import React from 'react';

export function addWorkItem(data: any) {
  return request(`https://localhost:7131/api/workItem/add`, {
    method: 'POST',
    data,
  });
}

export function listWorkItem(ids: React.Key[]) {
  return request(`https://localhost:7131/api/workItem/list/${ids[0]}`);
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

export function getWorkItem(id: string | undefined) {
  return request(`https://localhost:7131/api/workItem/${id}`);
}
