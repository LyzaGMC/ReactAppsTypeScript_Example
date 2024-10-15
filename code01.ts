// Importation de React en TypeScript
import React from 'react';

// Définition d'une interface pour les props, ici 'name' est de type string
interface GreetingProps {
  name: string;
}

// Définition du composant fonctionnel avec typage des props
const Greeting: React.FC<GreetingProps> = ({ name }) => {
  // Retourne un simple élément JSX avec le nom
  return <div>Hello, {name}!</div>;
};

// Export du composant par défaut
export default Greeting;
