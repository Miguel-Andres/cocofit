import React, { useState } from 'react'
import { useForm } from "react-hook-form"
import styled from "styled-components"

const FormRegister = styled.form`
    border : 3px solid red ;
    background-color: white;
    padding: 20px;
    display: flex;
    flex-direction: column ;
`;
const Container = styled.div`
    background-color :gray ;
    padding :50px ;
    width: auto ;
    height :800px;
       
    `;
const Divider = styled.div`
   
    height :20px;
    width:60px;
   margin:10px;
   

    `;
    const Subdivider = styled.div`
    border-top: 2px solid blue ; 
    flex-direction : row ;
    display:flex ;
    content : "sjsjsjsj";

    ::before{
        box-sizing:inherit
    }
    `;

export default function FormLogin() {

    const { register, errors, handleSubmit } = useForm()


    const onSubmit = (data) => {
        console.log(data)
    }



    return (
        <div>
            <Container>


                <h2>Get started with CocoFit</h2>
                <div>
                    <div>
                        <span>
                            <svg data-v-87b913ca="" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><g data-v-87b913ca="" clip-path="url(#clip0)"><path data-v-87b913ca="" d="M16.0006 7.99993C16.0003 7.49234 15.9537 6.9858 15.8614 6.48633H8.16553V9.51353H12.8232C12.532 10.5367 11.9036 11.4368 11.0359 12.0735L13.4392 13.9519C15.0233 12.485 16.0006 10.3628 16.0006 7.99993Z" fill="#3284FF"></path> <path data-v-87b913ca="" d="M8.26633 3.24355C9.38412 3.24006 10.4653 3.63391 11.3092 4.35203L13.5335 2.14211C12.1016 0.763924 10.173 -0.00573462 8.16573 3.21741e-05C5.03014 3.21741e-05 2.23555 1.80419 0.875488 4.42947L3.60606 6.46915C4.30373 4.58883 6.15896 3.24355 8.26633 3.24355Z" fill="#FF3424"></path> <path data-v-87b913ca="" d="M0.926397 11.6674L3.55833 9.61497C3.21124 8.59132 3.22759 7.48277 3.60471 6.46937L0.874137 4.42969C0.290248 5.55188 -0.009897 6.79509 -0.00102979 8.05465C0.00783741 9.31421 0.325458 10.5532 0.92509 11.6674H0.926397Z" fill="#FFBB00"></path> <path data-v-87b913ca="" d="M3.55821 9.61523L0.92627 11.6677C2.30462 14.2405 5.06982 16.0005 8.16556 16.0005C10.1269 16.0079 12.0157 15.2744 13.4392 13.9525L11.0359 12.0792C10.236 12.6638 9.26408 12.9782 8.26616 12.9752C6.10979 12.9733 4.21799 11.5647 3.55821 9.61523Z" fill="#26B14C"></path></g> <defs data-v-87b913ca=""><clipPath data-v-87b913ca="" id="clip0"><rect data-v-87b913ca="" width="16" height="16" fill="white"></rect></clipPath></defs></svg>
                        </span>
                        <span>Registrate con Google</span>
                    </div>

                </div>
               <Divider>
                  <Subdivider>
                        0
                  </Subdivider>

                      
                   

                    </Divider>  
                     <FormRegister onSubmit={handleSubmit(onSubmit)}>



                  


                    <label>Name
                        <input type="text" placeholder="Name"  {...register("name")} />
                    </label>

                    <label>Email
                    <input
                            type="text"
                            placeholder="Email"
                            {...register("Email")}
                        />
                    </label>


                    <label>Password
                    <input type="text" placeholder="Password"  {...register("password")} />
                    </label>

                    <button type="button" className="btn btn-outline-dark btn-xs">Dark</button>



                </FormRegister>
            </Container>

        </div >
    )
}
