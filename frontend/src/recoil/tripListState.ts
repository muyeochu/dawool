import {atom, selector} from 'recoil';

// 정렬할 떄 쓸 부분
export const sortByState = atom({
  key: 'sortByState',
  default: 'none',
})