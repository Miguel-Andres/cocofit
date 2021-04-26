import React ,{useState} from 'react'
import {useForm} from "react-hook-form"
import styled from "styled-components"

const FormRegister=styled.form`
    border : 3px solid red ;
    background-color: white;
    padding: 20px;
    display: flex;
    flex-direction: column ;
`;
const Container = styled.div`
    background-color :gray ;
    padding :200px ;
    width:50% ;
       
    `;

export default function FormLogin() {

const {register ,errors, handleSubmit}= useForm()


const onSubmit = (data)=>{
    console.log(data)
}



    return (
        <div>
            <Container>

           
                <h2>Get started with CocoFit</h2>
               <FormRegister onSubmit={handleSubmit(onSubmit)}>

                      <label>Name
                        <input type="text" placeholder="Name"  {...register("name")}/>
                    </label>

                    <label>Email
                    <input
                     type="text"
                     placeholder="Email" 
                     {...register("Email")}
                      />
                    </label>
                    

                    <label>Password
                    <input type="text" placeholder="Password"  {...register("password")}/>
                    </label>

                  <button type="button" className="btn btn-outline-dark btn-xs">Dark</button>

                  

               </FormRegister>
        </Container>
                 
        </div>
    )
}
