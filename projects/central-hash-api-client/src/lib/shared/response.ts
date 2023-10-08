export type Response<T> = {
  message: string;
  // in the delete operations or sensible data update, the data is undefined
  data: T;
};
