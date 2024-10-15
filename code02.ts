// Importation de React et Component depuis 'react'
import React, { Component } from 'react';

// Définition de l'interface du state : ici 'count' est de type number
interface CounterState {
  count: number;
}

// Composant de classe avec typage : props (vide ici) et state
class Counter extends Component<{}, CounterState> {
  // Définition de l'état initial avec typage
  state: CounterState = {
    count: 0,
  };

  // Méthode d'incrémentation, avec garantie que le 'state.count' est un nombre
  increment = () => {
    // Utilisation de 'setState' avec un nouvel état
    this.setState({ count: this.state.count + 1 });
  };

  // Méthode render pour retourner le JSX
  render() {
    return (
      <div>
        {/* Affichage du count */}
        <p>Count: {this.state.count}</p>
        {/* Bouton pour déclencher l'incrémentation */}
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

// Export du composant par défaut
export default Counter;
