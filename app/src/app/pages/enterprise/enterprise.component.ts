import { Component, OnInit } from "@angular/core";
import { EnterprisesTotals } from "src/app/models/enterprises-total.model";
import { EnterpriseService } from "src/app/services/enterprise.service";

@Component({
  selector: "app-enterprise",
  templateUrl: "./enterprise.component.html",
  styleUrls: ["./enterprise.component.scss"],
})
export class EnterpriseComponent implements OnInit {
  enterprisesTotal: EnterprisesTotals[] = [];

  constructor( private enterpriseService: EnterpriseService ) {}

  ngOnInit(): void {
    this.loadGeneralTotals();

  }
  loadGeneralTotals() {
    this.enterpriseService.getTotalsByEnterprise().subscribe((data) => {
      this.enterprisesTotal = data;
    });
  }
}
