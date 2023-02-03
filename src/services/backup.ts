import { request } from '@umijs/max';
import { RcFile } from 'antd/lib/upload';

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

export async function listUpgrade() {
  return request(`backup/upgrade/list`);
}

export async function singleUpgrade(url: string) {
  return request(url, {
    method: 'POST',
  });
}

export async function importData(file: RcFile) {
  const formData = new FormData();
  formData.append('file', file);
  return request(`backup/import`, {
    method: 'POST',
    data: formData,
  });
}

export async function exportCatalog(id: string | undefined) {
  return request(`backup/export/catalog/${id}`, {
    method: 'POST',
  });
}
