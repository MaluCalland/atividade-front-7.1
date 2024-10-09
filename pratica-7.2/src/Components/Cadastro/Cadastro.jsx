import {FaUser, FaLock} from 'react-icons/fa';

import { useState } from 'react';

import './Cadastro.css';

const Cadastro = () => {
    const [useremail, setUseremail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [usercpf, setUsercpf] = useState("");


    const handleSubmit = (event) => {
        event.preventDefault();

        alert("Enviando os dados do " + username + " - CPF: " + usercpf + " - E-mail: " + useremail + " - Senha: " + password);
        console.log("Enviando os dados do " + username + " - CPF: " + usercpf + " - E-mail: " + useremail + " - Senha: " + password);

        // console.log("teste", username, password)
        // console.log("Envio");
    }

  return (
    <div className="container">
        <form onSubmit={handleSubmit}>
            <h1>Iniciar Cadastro</h1>
            <div className='input-field'>
                <input 
                    type="nome"
                    placeholder='Nome Completo'
                    onChange={(e) => setUsername(e.target.value)}
                />
               <FaUser className='icon'/>
            </div>
            <div className='input-field'>
                <input 
                    type="cpf"
                    placeholder='Insira seu CPF'
                    onChange={(e) => setUsercpf(e.target.value)}
                />
               <FaUser className='icon'/>
            </div>
            <div className='input-field'>
                <input 
                    type="email" 
                    placeholder='Insira seu e-mail'
                    required
                    onChange={(e) => setUseremail(e.target.value)}
                />
                <FaUser className='icon'/>

            </div>
            <div className='input-field'>
                <input 
                    type="password"
                    placeholder='Senha'
                    onChange={(e) => setPassword(e.target.value)}
                />
               <FaLock className='icon'/>
            </div>

            <div className="recall-forget">
                <label htmlFor="">
                    <input type="checkbox" />
                    Lembrar de mim
                </label>
                <a href='#'>Esqueceu a senha?</a>
            </div>
            
            <button>Finalizar</button>

            <div className="signup-link">
                <p>
                    Não tem uma conta? <a href='#'>Cadastrar</a>
                </p>
            </div>
        </form>
    </div>
  )
}

export default Cadastro;