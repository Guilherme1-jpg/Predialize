import { Component, OnInit } from "@angular/core";
import { ClientService, Clients } from "src/app/services/client.service";
import { MatDialog } from '@angular/material/dialog';
import { ClientDetailsDialogComponent } from "./client-detais.component";

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {
  clients: Clients[] = [];
  filteredClients: Clients[] = [];
  searchQuery = '';

  constructor(private clientService: ClientService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.loadClients();
  }

  loadClients() {
    this.clientService.getAll().subscribe((data) => {
      this.clients = data;
      this.filteredClients = this.clients;
    });
  }

  updateFilter() {
    if (this.searchQuery.trim() === '') {
      this.filteredClients = this.clients;
    } else {
      this.filteredClients = this.clients.filter(client =>
        client.name.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    }
  }

  openClientDetails(client: Clients) {
    const dialogRef = this.dialog.open(ClientDetailsDialogComponent, {
      width: '80%',
      data: { client: client }
    });
  }

}
