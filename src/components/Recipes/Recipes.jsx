import toast from "../../assets/toast.webp";
import "./Recipes.css";

export default function Recipes() {
  return (
    <>
     <h2>Nos recettes</h2>
     <div className="card-container">
        <div class="card">
            <img src={toast} alt=""/>
            <div class="card-content">
                <h3>Toasts à la crème de saumon fumé</h3>
            </div>
        </div> 
        <div class="card">
            <img src={toast} alt=""/>
            <div class="card-content">
                <h3>Toasts à la crème de saumon fumé</h3>
            </div>
        </div> 
        <div class="card">
            <img src={toast} alt=""/>
            <div class="card-content">
                <h3>Toasts à la crème de saumon fumé</h3>
            </div>
        </div> 
        <div class="card">
            <img src={toast} alt=""/>
            <div class="card-content">
                <h3>Toasts à la crème de saumon fumé</h3>
            </div>
        </div> 
     </div>
    </>
  )
}