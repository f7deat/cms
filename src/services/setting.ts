import { request } from '@umijs/max';

export async function listSetting() {
  return request(`appsetting/list`);
}

export async function saveLayoutHead(data: any) {
  return request(`appsetting/layout/head/save`, {
    method: 'POST',
    data,
  });
}

export async function saveTelegram(id: string | undefined, data: API.Telegam) {
  return request(`appsetting/telegram/save/${id}`, {
    method: 'POST',
    data,
  });
}

export async function getTelegram(id: string | undefined) {
  return request(`appsetting/telegram/${id}`);
}

export async function testTelegram(data: any) {
  return request(`appsetting/telegram/test`, {
    method: 'POST',
    data,
  });
}

export async function getFooter(id: string | undefined) {
  return request(`appsetting/footer/${id}`);
}

export async function saveFooter(data: any) {
  return request(`appsetting/footer/save`, {
    method: 'POST',
    data,
  });
}

export async function saveSocial(data: any) {
  return request(`appsetting/social/save`, {
    method: 'POST',
    data,
  });
}

export async function getSocial(id: string | undefined) {
  return request(`appsetting/social/${id}`);
}

//#region Facebook
export async function facebookGet(id: string | undefined) {
  return request(`appsetting/facebook/${id}`);
}
export async function facebookSave(data: API.Facebook) {
  return request(`appsetting/facebook/save`, {
    method: 'POST',
    data,
  });
}
//#endregion

//#region SendGrid

export async function getSendGrid() {
  return request(`appsetting/sendgrid`);
}

export async function saveSendGrid(data: any) {
  return request(`appsetting/sendgrid/save`, {
    method: 'POST',
    data,
  });
}

//#endregion

export async function listSidebarWork(params: any) {
  return request(`appsetting/sidebar`, {
    params,
  });
}

export async function workAddSetting(data: any) {
  return request(`appsetting/work/add`, {
    method: 'POST',
    data,
  });
}

export async function getSetting(id: string | undefined) {
  return request(`appsetting/${id}`);
}

export async function saveSetting(id: string | undefined, data: any) {
  return request(`appsetting/save/${id}`, {
    method: 'POST',
    data,
  });
}

export async function graphFacebook(query: string) {
  return request(`appsetting/graph-api-explorer?query=${query}`);
}