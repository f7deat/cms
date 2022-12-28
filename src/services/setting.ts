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
