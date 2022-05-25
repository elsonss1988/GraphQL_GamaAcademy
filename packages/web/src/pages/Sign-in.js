import React from "react";
import { useState } from "react";

export default function SignIn() {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const handleSubmit = (event)=>{
        event.preventDefault();
        fetch ('http://127.0.0.1:8083/authenticate',{
            method:'POST',
            headers:{
                'Content-type':'application/json'
            },
            body:JSON.stringify({
                email,
                password
            })
        }).then((response)=>response.json())
        .then((data)=>console.log('Sucess!',data))
    }

    const handleEmailChange = (event) => setEmail(event.target.value);
    const handlePasswordChange = (event) => setPassword(event.target.value);
    return(
        <>
        {console.log('SignIn')}
        <form onSubmit={handleSubmit}>
        <fieldset>
            <label htmlFor="email">E-mail</label>
            <input 
            id="email" 
           
            type="email" 
            value={email}
            onChange={handleEmailChange}
            inputMode="email" 
            autoComplete="username" 
            />
        </fieldset>
        <fieldset>
            <label htmlFor="password">Senha</label>
            <input 
            id="password" 
           
            type="password" 
            onChange={handlePasswordChange}
            value={password}
            autoComplete="current-password" />
        </fieldset>
    <button type="submit"> Entrar </button>
    </form>
    </>
    )
}