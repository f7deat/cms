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

export async function saveTelegram(data: any) {
  return request(`appsetting/telegram/save`, {
    method: 'POST',
    data,
  });
}

export async function listTelegramConfiguration() {
  return request(`appsetting/telegram/configuration`);
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

export async function getHeaderTemplates() {
  return request(`appsetting/header/templates`);
}

export async function saveHeader(data: any) {
  return request(`appsetting/header/save`, {
    method: 'POST',
    data,
  });
}

export async function getHeader(id: string | undefined) {
  return request(`appsetting/header/${id}`);
}

export async function saveHeaderLogo(data: any) {
  return request(`appsetting/header/logo`, {
    method: 'POST',
    data,
  });
}

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
