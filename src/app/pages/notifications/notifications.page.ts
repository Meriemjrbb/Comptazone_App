import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.page.html',
  styleUrls: ['./notifications.page.scss'],
})
export class NotificationsPage {
  notifications: { title: string, message: string, timestamp: string, icon: string, iconColor: string }[] = [];

  constructor(private router: Router) {
    // Exemples
    this.notifications = [
      { title: 'Nouvelle mise à jour', message: 'Une nouvelle mise à jour est disponible pour l\'application.', timestamp: '10:00 AM', icon: 'notifications-outline', iconColor: 'primary' },
      { title: 'Message reçu', message: 'Vous avez un nouveau message de l\'administration.', timestamp: '10:15 AM', icon: 'mail-outline', iconColor: 'secondary' },
      { title: 'Rappel de paiement', message: 'Veuillez effectuer le paiement avant la date limite.', timestamp: '11:00 AM', icon: 'wallet-outline', iconColor: 'tertiary' },
    ];
  }
  navigateToHome() {
    this.router.navigate(['./home']);
  }
}

