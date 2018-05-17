import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MessageComponent } from "./message.component";

const routes: Routes = [
    { path: 'messages', component: MessageComponent, outlet: 'popup'}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MessageRoutingModule { }