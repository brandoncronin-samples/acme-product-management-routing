import { ProductEditComponent } from "./product-edit.component";
import { Injectable } from "@angular/core";
import { CanDeactivate } from "@angular/router";



@Injectable()
export class ProductEditGuard implements CanDeactivate<ProductEditComponent> {

    canDeactivate(component: ProductEditComponent): boolean {
        if (component.isDirty) {
            let productName = component.product.productName || 'New Product';
            return confirm(`Nagivate away and lose all changes to ${productName}?`);
        }
        return true;
    }
}