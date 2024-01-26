import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EnterpriseComponent } from './enterprise.component';
import { EnterpriseService } from 'src/app/services/enterprise.service';
import { MatCardModule } from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import { MatDialogModule, MatFormFieldModule, MatInputModule, MatTabsModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

const routes = [
  {
    path: '',
    component: EnterpriseComponent
  }
];

@NgModule({
  declarations: [EnterpriseComponent],
  imports: [
    RouterModule.forChild(routes),
    MatCardModule,
    CommonModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatTabsModule,
    MatDialogModule
  ],
  providers: [EnterpriseService]
})
export class EnterpriseModule {}
