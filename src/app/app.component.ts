import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Support', url: '/support', icon: 'chatbubbles' },
    { title: 'Notifications', url: '/notifications', icon: 'notifications' },
    { title: 'Paramétres', url: '/paramétres', icon: 'settings' },
    { title: 'Déconnexion', url: '/authentification', icon: 'log-out' },
  ];

  public showMenu = false;

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.showMenu = event.urlAfterRedirects === '/home';
      }
    });
  }
}
