export interface IAttributeValue {
  active: boolean;
  selected: boolean;
  selectable: boolean;
  id: number;
  url?: string;
  vendorId: string;
  alias: string;
  name: string;
  metadata: any[];
};
export interface IConfigurableAttribute {
  id: number;
  alias: string;
  vendorId: string;
  name: string;
  values: IAttributeValue[];
  metadata: any[];
};

export interface IProduct {
  name: string;
  id: number;
  vendorId: string;
};

export interface IConfigureService {
  getProduct(): any;
  getProductName(): string;
};