import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.page.html',
  styleUrls: ['./inscription.page.scss'],
})
export class InscriptionPage {
  name!: string;
  email!: string;
  password!: string;
  confirmPassword!: string;

  constructor(private router: Router) {}

  register() {
    // Logique d'inscription ici
    if (this.password !== this.confirmPassword) {
      alert('Les mots de passe ne correspondent pas');
      return;
    }

    // Inscription réussie, rediriger vers la page de connexion ou d'accueil
    alert('Inscription réussie');
    this.router.navigate(['/authentification']);
  }
  goBack() {
    this.router.navigate(['/authentification']); // Remplacez '/previous-page' par la route de votre page précédente
  }
}

