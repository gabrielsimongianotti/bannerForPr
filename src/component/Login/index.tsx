import React from 'react';
import './styles.css'
import { FaGithub } from 'react-icons/fa';

const onSuccess = (response: any) => console.log(response);
const onFailure = (response: any) => console.error(response);

function SignIn() {
  
  return (
    <div className="login" onClick={()=>console.log('oi')}>
      <FaGithub />
      <h6 className="teste-login">Sing in with GitHub </h6>
    </div>
  );
}

export { SignIn };
