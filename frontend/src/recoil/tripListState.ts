import {atom, selector} from 'recoil';
import { EtcListType } from '../types/tripListTypes';

// 정렬할 떄 쓸 부분
export const sortByState = atom({
  key: 'sortByState',
  default: 'none',
})

// export const tripListState = selector<EtcListType[]>({
//   key: 'tripListState',
//   get: ({get}) => {
//     const sortBy = get(sortByState);
//     const tripLists = get(TripFilteredList);
//     if (tripLists) {
//       return tripLists[sortBy];
//     }
//   }
// })