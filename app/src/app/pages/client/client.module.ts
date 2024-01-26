import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ClientComponent } from './client.component';
import { ClientService } from 'src/app/services/client.service';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import { MatDialogModule, MatFormFieldModule, MatInputModule, MatTabsModule } from '@angular/material';
import { FormsModule } from '@angular/forms';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ClientDetailsDialogComponent } from './client-detais.component';
import { ClientDetailsTabsComponent } from './client-details-tab.component';

const routes = [
  {
    path: '',
    component: ClientComponent
  }
];

@NgModule({
  declarations: [ClientComponent, ClientDetailsDialogComponent, ClientDetailsTabsComponent],
  entryComponents:[ ClientDetailsDialogComponent, ClientDetailsTabsComponent ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatCardModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatTabsModule,
    MatDialogModule
  ],

  providers: [ClientService],

})
export class ClientModule {}
