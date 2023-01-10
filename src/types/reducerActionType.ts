export type reducerActionType = {
  type: string;
  payload: {
    [key: string]: any; // = qualquer propriedade que tem qualquer valor
  };
};
