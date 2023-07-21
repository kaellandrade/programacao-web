import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';
import './index.css';

function Main() {

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');


  return (
    <>
      <div className="container-login">
        <h2>Acessar o Portal</h2>
        <InputText id="email" value={email} 
                  placeholder='Email'
                  type='email'
                  onChange={(e) => setEmail(e.target.value)} />
        <Password value={password} 
                  onChange={(e) => setPassword(e.target.value)} 
                  feedback={false} 
                  placeholder='Senha'
                  required
                  toggleMask />
        
        <Button id='bt-entrar' label="Entrar" />
        <div className='bt-esqueci-criar'>
          <Button label="Esqueci a senha" />
          <Button label="Não tenho conta" />
        </div>
      </div>
    </>
  );
}

export default Main;