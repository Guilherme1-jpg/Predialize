import { Component, Inject } from "@angular/core";
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Clients } from "src/app/services/client.service";

@Component({
  selector: 'app-client-details-dialog',
  template: `
    <h2 mat-dialog-title>{{ data.client.name }}</h2>
    <mat-dialog-content>
      <app-client-details-tabs [data]="data"></app-client-details-tabs>
    </mat-dialog-content>
    <mat-dialog-actions>
      <button mat-button mat-dialog-close>Fechar</button>
    </mat-dialog-actions>
  `,
  styleUrls: ['./client-details-dialog.component.scss']
})
export class ClientDetailsDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: { client: Clients }) {}
}
