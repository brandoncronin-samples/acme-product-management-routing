import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { MessageComponent } from './message.component';
import { MessageService } from './message.service';
import { MessageRoutingModule } from './message-routing.modules';

@NgModule({
    imports: [
        SharedModule,
        MessageRoutingModule
    ],
    declarations: [
        MessageComponent
    ],
    providers: [
        MessageService
    ]
})
export class MessageModule { }
