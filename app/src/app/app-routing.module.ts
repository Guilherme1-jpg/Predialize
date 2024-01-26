import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { NavbarComponent } from "./navigation/navbar.component";

const routes: Routes = [
  {
    path: "",
    component: NavbarComponent,
    children: [
      {
        path: "enterprise",
        loadChildren: () =>
          import("./pages/enterprise/enterprise.module").then(
            (m) => m.EnterpriseModule
          ),
      },

      {
        path: "client",
        loadChildren: () =>
          import("./pages/client/client.module").then(
            (m) => m.ClientModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
