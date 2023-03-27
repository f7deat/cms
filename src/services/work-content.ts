import { request } from '@umijs/max';

export async function listWork() {
  return request(`work/list`);
}

export async function addWorkContent(data: any) {
  return request(`work/add`, {
    method: 'POST',
    data,
  });
}

export async function listWorkContent(id: string | undefined) {
  return request(`work/list/${id}`);
}

export async function activeWork(id: string | undefined) {
  return request(`work/active/${id}`, {
    method: 'POST',
  });
}

export async function sortOrder(data: Entity.WorkItem) {
  return request(`work/sort-order`, {
    method: 'POST',
    data,
  });
}

export async function listChildWorkContent(id: string | undefined) {
  return request(`work/list-child/${id}`);
}

export async function addChildWorkContent(data: API.WorkContent) {
  return request(`work/child/add`, {
    method: 'POST',
    data,
  });
}

export async function updateTitle(data: any) {
  return request(`work/save/title`, {
    method: 'POST',
    data,
  });
}

export async function saveArguments(id: string | undefined, data: any) {
  return request(`work/save/${id}`, {
    method: 'POST',
    data,
  });
}

export async function saveContactForm(data: API.ContactForm) {
  return request(`work/contact-form/save`, {
    method: 'POST',
    data,
  });
}

export async function getContactForm(id: string | undefined) {
  return request<API.ContactForm>(`work/contact-form/${id}`);
}

export async function addColumn(data: any) {
  return request(`work/column/add`, {
    method: 'POST',
    data,
  });
}

export async function updateWorkContent(data: any) {
  return request(`work/save`, {
    method: 'POST',
    data,
  });
}

export async function getWorkContent(id: string | undefined) {
  return request(`work/${id}`);
}

export async function getWorkSummary(id: string | undefined) {
  return request(`work/summary/${id}`);
}

export async function updateWorkSummary(data: API.WorkContent) {
  return request(`work/summary/update`, {
    method: 'POST',
    data,
  });
}

export async function saveWorkContent(data: API.WorkItem) {
  return request(`work/save`, {
    method: 'POST',
    data,
  });
}

export async function deleteWorkContent(
  workContentId: string,
  catalogId: string | undefined,
) {
  return request(`work/delete`, {
    method: 'POST',
    data: {
      workContentId,
      catalogId,
    },
  });
}

export async function deleteWorkContentById(id: string | undefined) {
  return request(`work/delete/${id}`, {
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
  return request<API.Navbar>(`work/navbar/${id}`);
}

export async function saveNavbar(data: API.Navbar) {
  return request(`work/navbar/save`, {
    method: 'POST',
    data,
  });
}

export async function addNavbarItem(data: API.NavItem) {
  return request(`work/navbar/item/add`, {
    method: 'POST',
    data,
  });
}

export async function listNavItem(id: string | undefined) {
  return request(`work/navbar/item/list/${id}`);
}

export async function saveNavItem(id: string | undefined, data: API.Link) {
  return request(`work/navbar/item/save/${id}`, {
    method: 'POST',
    data,
  });
}

export async function deleteNavItem(
  linkId: string,
  workId: string | undefined,
) {
  return request(`work/navbar/item/delete`, {
    method: 'POST',
    data: {
      linkId,
      workId,
    },
  });
}

export async function getSwiper(workContentId: string | undefined) {
  return request(`work/swiper/${workContentId}`);
}

export async function addSwiperItem(data: any) {
  return request(`work/swiper/add-image`, {
    method: 'POST',
    data,
  });
}

export async function getBlockEditor(id: string | undefined) {
  return request(`work/block-editor/${id}`);
}

export async function saveBlockEditor(data: any) {
  return request(`work/block-editor/save`, {
    method: 'POST',
    data,
  });
}

export async function getCard(id: string | undefined) {
  return request(`work/card/${id}`);
}

export async function saveCard(data: any) {
  return request(`work/card/save`, {
    method: 'POST',
    data,
  });
}

export async function getRow(id: string | undefined) {
  return request(`work/row/${id}`);
}

export async function saveRow(data: any) {
  return request(`work/row/save`, {
    method: 'POST',
    data,
  });
}

//#region Column
export async function getListColumn(
  params: {
    current?: number;
    pageSize?: number;
  },
  id: string | undefined,
) {
  return request(`work/column/list/${id}`);
}

export async function getColumn(id: string | undefined) {
  return request(`work/column/${id}`);
}

export async function saveColumn(data: API.Column) {
  return request(`work/column/save`, {
    method: 'POST',
    data,
  });
}
//#region

export async function getChildList(
  params: {
    current?: number;
    pageSize?: number;
  },
  id: string | undefined,
) {
  return request(`work/child/list/${id}`);
}

//#region Look book
export async function addLookBook(data: API.WorkContent) {
  return request(`work/lookbook/add`, {
    method: 'POST',
    data,
  });
}
//#endregion

export async function listTag(params: any) {
  return request(`work/tag/list`, {
    params,
  });
}

export async function addItem(data: any) {
  return request(`work/item/add`, {
    method: 'POST',
    data,
  });
}

export async function deleteItem(data: Entity.WorkItem) {
  return request(`work/item/delete`, {
    method: 'POST',
    data,
  });
}

export async function bloggerGet(id: string | undefined) {
  return request(`work/blogger/${id}`);
}

export async function bloggerSave(data: any) {
  return request(`work/blogger/save`, {
    method: 'POST',
    data,
  });
}

export async function getListGroup(id: string | undefined) {
  return request(`work/list-group/${id}`);
}

export async function addListGroupItem(
  id: string | undefined,
  data: API.ListGroupItem,
) {
  return request(`work/list-group/item/add/${id}`, {
    method: 'POST',
    data,
  });
}

export async function saveLink(id: string | undefined, data: API.Link) {
  return request(`work/link/save/${id}`, {
    method: 'POST',
    data,
  });
}

export async function getLink(id: string | undefined) {
  return request(`work/link/${id}`);
}
