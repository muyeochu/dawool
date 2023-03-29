export interface recommendListType {
  contentId: number;
  contentTypeId: number;
  title: string;
  imageUrl: string;
  liked: boolean;
}

export type RecListType = recommendListType[];