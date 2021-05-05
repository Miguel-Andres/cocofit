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
              <img src="/image/Logo.svg" width="50px"  height="100px"/>
               </div>
                <div>
                    <p>Login</p>                    
                </div>
                <div>
                    Register
                </div>
           </NavbarContainer>

       </React.Fragment>
    )
}
