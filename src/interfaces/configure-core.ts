import { IConfigureService, IProduct } from "./common";

export class ConfigureService implements IConfigureService {
  configure: IConfigureService;
  constructor(configure: any) {
    this.configure = configure;
  }
  
  getProduct(): IProduct {
    return this.configure.getProduct();
  }

  getProductName(): string {
    return this.getProduct().name;
  }
}