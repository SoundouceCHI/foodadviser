import { FaMinus } from "react-icons/fa";
import orange from "../../assets/orange.jpg";
import "./Ingredients.css";

export default function Ingredients() {
  return (
    <>
        <div className="container">
            <h2 className="title-ingredients">Vous avez comme ingrédients :</h2>
            <div className="card-ingredient-container">
                <div className="card-ingredient">
                    <img src={orange} alt="" className="card-image"/>
                    <div className="card-ingredient-content">
                        <h3>Orange</h3>
                        <button className="ingredient-btn"><FaMinus /></button>
                    </div>
                </div> 
                <div className="card-ingredient">
                    <img src={orange} alt="" className="card-image"/>
                    <div className="card-content">
                        <h3>Orange</h3>
                        <button className="ingredient-btn"><FaMinus /></button>
                    </div>
                </div> 
                <div className="card-ingredient">
                    <img src={orange} alt="" className="card-image"/>
                    <div className="card-content">
                        <h3>Orange</h3>
                        <button className="ingredient-btn"><FaMinus /></button>
                    </div>
                </div> 
                <div className="card-ingredient">
                    <img src={orange} alt="" className="card-image"/>
                    <div className="card-content">
                        <h3>Orange</h3>
                        <button className="ingredient-btn"><FaMinus /></button>
                    </div>
                </div> 
            </div>
        </div>
    </>
  )
}