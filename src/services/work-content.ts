import { request } from '@umijs/max';

export async function addWorkContent(data: any) {
  return request(`workContent/add`, {
    method: 'POST',
    data,
  });
}

export async function listWorkContent(id: string | undefined) {
  return request(`workContent/list/${id}`);
}

export async function updateTitle(data: any) {
  return request(`workContent/save/title`, {
    method: 'POST',
    data,
  });
}

export async function saveContactForm(data: API.ContactForm) {
  return request(`workContent/save/contact-form`, {
    method: 'POST',
    data,
  });
}

export async function addColumn(data: any) {
  return request(``, {
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
  catalogId: string | undefined,
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

export async function getNavbar(id: string | undefined) {
  return request<API.Navbar>(`workContent/navbar/${id}`);
}

export async function saveNavbar(data: API.Navbar) {
  return request(`workContent/navbar/save`, {
    method: 'POST',
    data,
  });
}
