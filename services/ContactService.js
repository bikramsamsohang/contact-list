import * as http from '../utils/HttpUtil';

export function fetchContacts(url) {
    return http.get(url);
}