import React from 'react'
import styled from 'styled-components'
import FormLogin from './login/FormLogin';

const Tituloprincipal = styled.h1`

       font-size : 100px;
       font-family: 'Caesar Dressing', cursive;
       `;

const ContainerRegister = styled.div`
       
        background-color :transparent;    
        width :100%;   
        display:flex;
        flex-direction : row ;
        justify-content:center;
        padding:0;
        
        
       `;



const ImgRegister = styled.div`
   
    background-image : url("../image/Register.jpg") ;   
    background-size:cover;
    
    position: relative;
    display:block;
    height :auto;
    width:45%;
    border-radius: 10% 0 0 10%;
   
    `;


export default function Login() {








    return (
        <React.Fragment>

            <Tituloprincipal>Corinna CocoFit</Tituloprincipal>

            <ContainerRegister className="container">

                
            <ImgRegister >
             </ImgRegister >    
               

                   

                   
                        <FormLogin/>

                   
               



            </ContainerRegister>




        </React.Fragment>
    )
}
