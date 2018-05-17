import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ProductListComponent } from "./product-list.component";
import { ProductDetailComponent } from "./product-detail.component";
import { ProductEditComponent } from "./product-edit.component";
import { ProductResolver } from "./product-resolver.service";
import { ProductEditInfoComponent } from "./product-edit-info.component";
import { ProductEditTagsComponent } from "./product-edit-tags.component";
import { ProductEditGuard } from "./product-guard.service";

const routes: Routes = [
    {
        path: '',
        component: ProductListComponent
    },
    {
        path: ':id',
        component: ProductDetailComponent,
        resolve: { product: ProductResolver }
    },
    { 
        path: ':id/edit', 
        component: ProductEditComponent, 
        canDeactivate: [ ProductEditGuard ],
        resolve: { product: ProductResolver },
        children: [
            {
                path: '', redirectTo: 'info', pathMatch: 'full'
            },
            {
                path: 'info', component: ProductEditInfoComponent
            },
            {
                path: 'tags', component: ProductEditTagsComponent
            }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class ProductRoutingModule { }