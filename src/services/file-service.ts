import { request } from '@umijs/max';
import { RcFile } from 'antd/lib/upload';

export async function listFile(
  params: {
    keyword?: string;
    current?: number;
    pageSize?: number;
  },
  options?: { [key: string]: any },
) {
  return request(`fileExplorer/list`, {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

export async function deleteFileContent(id: string | undefined) {
  return request(`fileExplorer/delete-file-content/${id}`, {
    method: 'POST',
  });
}

export async function deleteFileItem(data: API.FileItem) {
  return request(`fileExplorer/delete-file-item`, {
    method: 'POST',
    data,
  });
}

export async function getFileDetail(id: string | undefined) {
  return request<API.FileContent>(`fileExplorer/${id}`);
}

export async function listWorkItemFiles(
  params: {
    current?: number;
    pageSize?: number;
  },
  options: { id: string | undefined },
) {
  return request(`fileExplorer/file-items/${options.id}`);
}

export async function uploadRcFile(file: RcFile) {
  const formData = new FormData();
  formData.append('file', file);
  return request(`fileExplorer/upload`, {
    method: 'POST',
    data: formData,
  });
}

export async function uploadFromUrl(url: string) {
  return request(`fileexplorer/upload-from-url`, {
    method: 'POST',
    data: {
      url,
    },
  });
}
