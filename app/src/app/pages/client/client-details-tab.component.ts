import { Component, Input } from "@angular/core";
import { Clients } from "src/app/services/client.service";

@Component({
  selector: 'app-client-details-tabs',
  templateUrl: './client-details.component.html',
})
export class ClientDetailsTabsComponent {
  @Input() data: Clients;
}
