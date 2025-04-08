export const MEGA_WAYFARER_ID = 26101;
export const RBN_CUSTOMER_ID = 1581;
export const DEFAULT_MODEL = 222;

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