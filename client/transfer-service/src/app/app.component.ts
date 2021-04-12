import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'transfer-service';

  public tabs = [
    {
      name: 'transferList',
      displayName: 'Movimientos',
      route: 'movimientos'
    },
    {
      name: 'newRecipient',
      displayName: 'Nuevo Destinatario',
      route: 'nuevo-destinatario'
    },
    {
      name: 'transfer',
      displayName: 'Tranferir',
      route: 'tranferir'
    }
  ]
  public activeLink = this.tabs[0].route;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.router.navigateByUrl('/' + this.tabs[0].route)
  }
}
