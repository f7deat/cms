import { request } from '@umijs/max';

export async function listFile(
  params: {
    // query
    /** keyword */
    keyword?: string;
    /** current */
    current?: number;
    /** pageSize */
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

export async function deleteFileContent(id: string) {
  return request(`fileExplorer/delete-file-content/${id}`, {
    method: 'POST',
  });
}

export async function getFileDetail(id: string | undefined) {
  return request<API.FileContent>(`fileExplorer/${id}`);
}

export async function listWorkItemFiles(
  params: {
    // query
    /** 当前的页码 */
    current?: number;
    /** 页面的容量 */
    pageSize?: number;
  },
  options: { id: string | undefined },
) {
  return request(`fileExplorer/file-items/${options.id}`);
}
