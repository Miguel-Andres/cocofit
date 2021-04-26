import React from 'react'
import styled from 'styled-components'
import FormLogin from './login/FormLogin';

const Tituloprincipal = styled.h1`

       font-size : 100px;
       font-family: 'Caesar Dressing', cursive;
       `;

const ContainerRegister = styled.div`
       
        background-color : tomato ;        
        display:flex;
        width:100%; 
        position: relative;

       `;



const ImgRegister = styled.div`
   
    background-image : url("../image/Register.jpg") ;
    background-position: center;
    background-size:cover;
    position: relative;
    width: 52%;
    height: auto ;
   
   
    `;


export default function Login() {








    return (
        <React.Fragment>

            <Tituloprincipal>Corinna CocoFit</Tituloprincipal>

            <ContainerRegister className="container">

                
            <ImgRegister>
                
                </ImgRegister>

                   

                   
                        <FormLogin/>

                   
               



            </ContainerRegister>




        </React.Fragment>
    )
}
