import request from '../utils/request';
import baseConfig from '../config/base-config';

const { baseUrl } = baseConfig

export async function login() {
  return request(baseUrl + 'login/randoms', {
    method: 'POST',
  });
}
