type TvlListsType = {
  id: string;
  pairimage: string;
  alt: string;
};
type CryptoListsType = {
  id: string;
  currencyname: string;
  cryptoimage: string;
  price: string;
  isprofit: boolean;
  profit: string;
  tvlprice: string;
  tvllists: TvlListsType[];
};

export type { CryptoListsType };
