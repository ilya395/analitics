export interface IObjectTypesItem {
  roomType?: string | number;
  list?: {
    status?: string | number;
    number?: number;
  }[],
}

export interface IObjectTypesList {
  data?: IObjectTypesItem[];
}