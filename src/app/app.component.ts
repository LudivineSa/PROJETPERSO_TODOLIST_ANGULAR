import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ma liste de tâches';
}

// TODO: Utiliser le localStorage pour sauvegarder les taches
// TODO: Ajouter un formulaire pour ajouter une catégorie de tache
// TODO: Ajouter une date limite pour chaque tache (à faire avant le..)
// TODO: Voir pour ajouter un système de rappel (notification)
// TODO: Ajouter un système de priorité (faible, moyenne, haute)
// TODO: Ajouter un système de tri par catégorie / date / priorité
// TODO: Ajouter un système de validaton du formulaire
// TODO: Ajouter la possibilité de modifier une tache à faire
