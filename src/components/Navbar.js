import React from 'react'
import styled from 'styled-components'



const NavbarContainer = styled.div`

    background-color: red ;

`
export default function Navbar() {
    return (
       <React.Fragment>

           <NavbarContainer>
               <div>
              <img src="/image/Logo.svg" width="50px" />
               </div>
                <div>
                    <p>Login</p>
                    <p>Login</p>
                </div>
           </NavbarContainer>

       </React.Fragment>
    )
}