declare global {
  interface Window {
    rtrViewerMV: any;
    _configure: any;
    vmmv: any;
    _rxcData: any;
    RXC: any;
    RXC_LOADED: boolean;
  }
}
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

export enum RenderType {
  '3D' = '3D',
  '2D' = '2D',
};

export interface ICAMap {
  id: number | null;
  alias: string;
  icon: string;
  //ca: IConfigurableAttribute | null;
  selectedAvId: number | null;
  skeleton?: boolean;
};

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

export interface IConfigureService {
  getProduct(): any;
  getProductName(): string;
  getToken(): string;
  getRecipe(format: string, option1?: string, option2?: string): any;
  getAttribute(options: any): IConfigurableAttribute;
  mapCas(): ICAMap[];
};