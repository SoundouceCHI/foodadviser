import React from 'react'
import './RecipeSteps.css'

export default function RecipeSteps() {
    const steps = [
        {
          step: "1",
          description:
            "Mixez les noisettes et les crêpes dentelles. Ajoutez le chocolat praliné fondu et tapissez le fond d'un cercle de 20 cm posé sur une plaque couverte de papier sulfurisé. Placez au frais.",
        },
        {
          step: "2",
          description:
            "Gardez 3 carrés et faites fondre le chocolat corsé au micro-ondes. Ajoutez les jaunes puis les blancs battus en neige. Versez sur la base praliné et placez au frais 1 heure.",
        },
        {
          step: "3",
          description:
            "Faites fondre le chocolat blanc au micro-ondes ou bain marie. Ajoutez la crème fleurette battue en chantilly. Versez sur la mousse noire. Placez 1 heure au frais et décorez de copeaux de chocolat noir.",
        },
      ];
    
      return (
        <div className='container'>
        <div className="recipe-step-list">
          {steps.map((item, index) => (
            <div key={index} className="recipe-step-list__container">
              <div className="recipe-step-list__head">
                <span>Étape {item.step}</span>
              </div>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
        </div>
      );
    }
