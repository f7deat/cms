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

export async function sortOrder(
  workContentId: string,
  catalogId: string,
  sortOrder: number,
) {
  return request(`workContent/sort-order`, {
    method: 'POST',
    data: {
      workContentId,
      catalogId,
      sortOrder,
    },
  });
}

export async function listChildWorkContent(id: string | undefined) {
  return request(`workContent/list-child/${id}`);
}

export async function addChildWorkContent(data: API.WorkContent) {
  return request(`workContent/child/add`, {
    method: 'POST',
    data,
  });
}

export async function updateTitle(data: any) {
  return request(`workContent/save/title`, {
    method: 'POST',
    data,
  });
}

export async function saveContactForm(data: API.ContactForm) {
  return request(`workContent/contact-form/save`, {
    method: 'POST',
    data,
  });
}

export async function getContactForm(id: string | undefined) {
  return request<API.ContactForm>(`workContent/contact-form/${id}`);
}

export async function addColumn(data: any) {
  return request(`workContent/column/add`, {
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

export async function deleteWorkContentById(id: string | undefined) {
  return request(`workContent/delete/${id}`, {
    method: 'POST',
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
  if (!id) {
    return request(`style`);
  }
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

export async function getSwiper(workContentId: string | undefined) {
  return request(`workContent/swiper/${workContentId}`);
}

export async function addSwiperItem(data: any) {
  return request(`workContent/swiper/add-image`, {
    method: 'POST',
    data,
  });
}

export async function getBlockEditor(id: string | undefined) {
  return request(`workContent/block-editor/${id}`);
}

export async function saveBlockEditor(data: any) {
  return request(`workContent/block-editor/save`, {
    method: 'POST',
    data,
  });
}

export async function getCard(id: string | undefined) {
  return request(`workContent/card/${id}`);
}

export async function saveCard(data: any) {
  return request(`workContent/card/save`, {
    method: 'POST',
    data,
  });
}

export async function getRow(id: string | undefined) {
  return request(`workContent/row/${id}`);
}

export async function saveRow(data: any) {
  return request(`workContent/row/save`, {
    method: 'POST',
    data,
  });
}

export async function getListColumn(
  params: {
    current?: number;
    pageSize?: number;
  },
  id: string | undefined,
) {
  return request(`workContent/column/list/${id}`);
}

export async function getChildList(
  params: {
    current?: number;
    pageSize?: number;
  },
  id: string | undefined,
) {
  return request(`workContent/child/list/${id}`);
}

//#region Look book
export async function addLookBook(data: API.WorkContent) {
  return request(`workContent/lookbook/add`, {
    method: 'POST',
    data,
  });
}
//#endregion
