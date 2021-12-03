export type ICards = {
  title: string;
  items: ICardItems;
  urlSuffixe: string;
};

export type ICardItem = {
  id: number;
  img: string;
  gender: string;
  name: string;
};

export type ICardItems = ICardItem[];
