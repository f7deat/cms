import { request } from '@umijs/max';

export async function listFile() {
  return request(`fileExplorer/list`);
}

export async function deleteFileContent(id: string) {
  return request(`fileExplorer/delete-file-content/${id}`, {
    method: 'POST',
  });
}
