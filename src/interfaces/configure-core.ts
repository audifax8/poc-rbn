import {
  IConfigureService,
  IProduct,
  IConfigurableAttribute
} from "./common";

export class ConfigureService implements IConfigureService {
  configure: IConfigureService;
  constructor(configure: any) {
    this.configure = configure;
  }
  
  getProduct(): IProduct {
    return this.configure.getProduct();
  };

  getProductName(): string {
    return this.getProduct().name;
  };

  getAttributeByAlias(alias: string): IConfigurableAttribute {
    return this.configure.getAttribute({ alias });
  };

  getRecipe(format: string, option1?: string, option2?: string): any {
    return this.configure.getRecipe(format, option1, option2);
  };

  getAttribute(options: any): IConfigurableAttribute {
    return this.configure.getAttribute(options);
  }

  getToken(): string {
    const skipServices = true;
    const TOKEN_ALIASES = [
      'frame_sku',
      'temple_sku',
      'temple_tips_sku',
      'lenses_sku',
      'metal_sku',
      'size',
      'service_1',
      'service_2',
      'service_3'
    ];
    const recipe = this.configure.getRecipe('custom', 'alias', 'vendorId');
    const productVendorId = this.getProduct().vendorId;
    let tokenArray = TOKEN_ALIASES.map(alias => {
      if (alias.indexOf('service') > -1) {
        return '';
      } else {
        return recipe[alias] ? recipe[alias].replace(/\s/g, '.') : 'NULL';
      }
    });
    tokenArray = tokenArray.filter(el => {
      if (el) {
        return el;
      }
    });
    if (!skipServices) {
      const selectedLensesSku = this.getAttributeByAlias('lenses_sku').values.filter((value: any) => value.selected)[0];
      if (selectedLensesSku.metadata) {
        const services: any [] = [];
        selectedLensesSku.metadata.map((data: any) => {
          if (data.key.indexOf('Service') > -1) {
            const order = data.key.match(/[0-9]/);
            services[order[0]] = data.value;
          }
        });
        services.map(service => tokenArray.push(service));
      }
    }
    const token = ['TKN', productVendorId.toUpperCase()].concat(tokenArray).join('~');
    return encodeURIComponent(token);
  };
}