import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.page.html',
  styleUrls: ['./authentification.page.scss'],
})
export class AuthentificationPage {
  email: string | undefined;
  password: string | undefined;
  passwordError = false;

  constructor(private router: Router) {}

  login() {
    if (this.email === 'test@gmail.com' && this.password === '1234') {
      this.router.navigate(['/home']);
    } else if (this.email === 'test@gmail.com') {
      alert('Mot de passe incorrect');
      this.password = ''; 
      
    } else {
      alert('Email ou mot de passe incorrect');
    }
  }

  forgotPassword() {
  }

  navigateToInscription() {
    this.router.navigate(['/inscription']);
  }
}
