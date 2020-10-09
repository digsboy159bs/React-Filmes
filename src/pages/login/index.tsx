import React from 'react';
import Footer from '../../components/footer/index';
import Header from '../../components/header/index'
import Input from '../../components/input/index';
import '../../assets/styles/global.css';
import Button from '../../components/button/index';


function Login(){
    return(
        <div>
            <Header description=" Faça o login para acessar a coletanea"/>
            <div className="centro">
                <div className="login">
                    <h1>Login</h1>
                    <Input type="text" name="email" label="Email"/>
                    <Input type="password" name="senha" label="Senha"/>
                    <Button type="submit" name="Enviar"/>
                </div>
            </div>
            
            
            <Footer/>
            
        </div>

    ) 
}

export default Login;