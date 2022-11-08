import { request } from '@umijs/max';

export async function getStatistic() {
  return request<API.Statistic>(`backup/statistic`);
}

export async function getExportData() {
  return request(`backup/export`, {
    method: 'POST',
  });
}
