import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ma liste de tâches';
}

// TODO: 6 Utiliser le localStorage pour sauvegarder les taches
// TODO: 2 Ajouter un formulaire pour modifier une catégorie de tache
// TODO: 7 Voir pour ajouter un système de rappel (notification)
// TODO: 4 Ajouter un système de tri par catégorie / date / priorité
// TODO: Faire le CSS
// TODO: Faire le responsive
// TODO: Regarder les observables pour simplifier mes services
// TODO: Système de pagination ? (pour les taches terminées)
