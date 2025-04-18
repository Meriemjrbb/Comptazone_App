import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-support',
  templateUrl: './support.page.html',
  styleUrls: ['./support.page.scss'],
})
export class SupportPage {
  messages: { sender: string, content: string, timestamp: string, avatar: string }[] = [];
  newMessage: string = '';

  constructor(private router: Router) {
    
    // Exemple de messages existants
    this.messages = [
      { sender: 'Administration', content: 'Bonjour, comment puis-je vous aider?', timestamp: '10:00 AM', avatar: 'assets/image.png' }, // Logo pour l'administration
      { sender: 'Client', content: 'J’ai un problème avec mon compte.', timestamp: '10:05 AM', avatar: '' }, // Pas d'avatar pour le client
    ];
  }

  sendMessage() {
    if (this.newMessage.trim() !== '') {
      const newMessage = {
        sender: 'Client', // Nom de l'utilisateur actuel
        content: this.newMessage,
        timestamp: new Date().toLocaleTimeString(),
        avatar: '' // Pas d'avatar pour le client
      };

      this.messages.push(newMessage);
      this.newMessage = '';
    }
  }
  goBack() {
    this.router.navigate(['/home']); 
  }
  
}
