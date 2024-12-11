import React from 'react'
import './SignIn.css'


export default function SignIn() {
  return (
    <div className='mainContainer'>
      <div className='titleContainer'>
        <div>SE CONNECTER</div>
      </div>
      <br />
      <div className='inputContainer'>
        <input
        //   value={email}
          placeholder="Email ou pseudo"
        //   onChange={()}
          className='inputBox'
        />
        {/* <label className="errorLabel">{emailError}</label> */}
      </div>
      <br />
      <div className='inputContainer'>
        <input
        //   value={password}
          placeholder="Mot de passe"
        //   onChange={()}
          className='inputBox'
        />
        {/* <label className="errorLabel">{passwordError}</label> */}
      </div>
      <br />
      <a>Mot de passe oublié ?</a>
      <div>
        <div className="buttonContainer">
            <input
            className="inputButton"
            type="button"
            value="Se connecter"
            />
            <input
            className="inputButton"
            type="button"
            value="Créer un compte"
            />
        </div>
      </div>

    </div>
  )
}
