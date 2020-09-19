import { get } from "../utils/request";

export function loadlist(page) {
  return get(`https://pcw-api.iqiyi.com/search/recommend/list?channel_id=1&data_type=1&mode=11&page_id=${page}&ret_num=12
  `);
}
