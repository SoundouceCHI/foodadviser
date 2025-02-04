# FoodAdviser

## Description
FoodAdviser est une application intelligente qui facilite la planification des repas en proposant des recettes personnalisées en fonction des ingrédients détectés sur une image. L'application génère également une liste de courses basée sur les recettes sélectionnées. Grâce à l'intelligence artificielle, FoodAdviser propose une expérience fluide et intuitive pour optimiser l'organisation des repas.

## Fonctionnalités principales
- **Création de compte** : Inscription et authentification des utilisateurs.
- **Reconnaissance d'image** : Détection des ingrédients présents sur une image grâce à un modèle de vision par ordinateur.
- **Recommandation de recettes** : Suggestion de recettes en fonction des ingrédients détectés, des préférences alimentaires et des restrictions nutritionnelles.
- **Génération d'une liste de courses** : Création automatique d'une liste d'achats basée sur les recettes sélectionnées.

## Technologies utilisées
### Backend
- Django + Django REST Framework (gestion des utilisateurs, API)
- OpenAI API (détection d'ingrédients et recommandations avancées)
- Spoonacular API (recherche et récupération des recettes)
- PostgreSQL (Base de données) 

### Frontend
- React.js (interface utilisateur interactive et responsive)

### Outils de gestion
- GitHub (gestion du code et collaboration)
- Trello (gestion des tâches avec la méthode Kanban)


## Méthodologie
- **Méthode Traditionelle** .
- **Réunions journalières** pour suivi de l’avancement et résolution des problèmes bloquants.
- **Code review systématique** pour garantir la qualité du code et la maintenance.

## Problématiques rencontrées
- **Limitation des requêtes API** : Contournement en utilisant une base de données pour stocker les résultats et limiter les appels externes.
- **Fiabilité des résultats de reconnaissance d’image** : Ajustement et test de plusieurs modèles d’IA pour une meilleure précision.
- **Adaptation des recettes selon les préférences** : Implémentation d'un algorithme de scoring pour optimiser la personnalisation des suggestions.

## Améliorations futures
- **Génération automatique de menus hebdomadaires** en fonction des préférences et des habitudes alimentaires.
- **Optimisation des performances** avec un cache interne et réduction des requêtes répétitives.
- **Extension de la base de données de recettes** pour proposer un panel plus large d’options.
- **Intégration d’un chatbot** pour accompagner l’utilisateur dans la gestion de ses repas et répondre à ses questions sur la nutrition.
- **Ajout d’un mode hors ligne** permettant d’accéder aux dernières recettes enregistrées sans connexion Internet.
- **Planification des repas** : Possibilité de planifier les repas de la semaine avec des recommandations adaptées.
- **Personnalisation avancée** : Adaptation des recettes en fonction des régimes alimentaires, des allergies et des préférences culinaires.


## Contributeurs
- **Soundouce CHIBANI**
- **Aya BENMAKHLOUF**


