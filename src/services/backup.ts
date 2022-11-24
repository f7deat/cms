import { request } from '@umijs/max';

export async function getStatistic() {
  return request<API.Statistic>(`backup/statistic`);
}

export async function getExportData() {
  return request(`backup/export`, {
    method: 'POST',
  });
}

export async function upgrade() {
  return request(`backup/upgrade`, {
    method: 'POST',
  });
}
