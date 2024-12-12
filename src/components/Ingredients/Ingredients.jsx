import { FaMinus } from "react-icons/fa";
import orange from "../../assets/orange.jpg";
import "./Ingredients.css";

export default function Ingredients() {
  return (
    <>
        <div className="container">
            <h2 className="margin-top">Vous avez comme ingrédients :</h2>
            <div className="card-container">
                <div className="card">
                    <img src={orange} alt="" className="card-image"/>
                    <div className="card-content">
                        <h3>Toasts à la crème de saumon fumé</h3>
                        <button className="ingredient-btn"><FaMinus /></button>
                    </div>
                </div> 
                <div className="card">
                    <img src={orange} alt="" className="card-image"/>
                    <div className="card-content">
                        <h3>Toasts à la crème de saumon fumé</h3>
                        <button className="ingredient-btn"><FaMinus /></button>
                    </div>
                </div> 
                <div className="card">
                    <img src={orange} alt="" className="card-image"/>
                    <div className="card-content">
                        <h3>Toasts à la crème de saumon fumé</h3>
                        <button className="ingredient-btn"><FaMinus /></button>
                    </div>
                </div> 
                <div className="card">
                    <img src={orange} alt="" className="card-image"/>
                    <div className="card-content">
                        <h3>Toasts à la crème de saumon fumé</h3>
                        <button className="ingredient-btn"><FaMinus /></button>
                    </div>
                </div> 
            </div>
        </div>
    </>
  )
}