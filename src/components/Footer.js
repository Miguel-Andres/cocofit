import React from 'react'
import styled from "styled-components"

 const FooterContainer = styled.div`

        background-color : gainsboro;
        display: flex ;
        justify-content : space-around ;
        padding : 5px ;
        margin : 20px ;
    `;
export default function Footer() {

   

    return (
        <React.Fragment>

            <FooterContainer>
                <div>
                     <p>© 2021 All Rights Reserved · Privacy Policy · 
                         Terms & Conditions · Condizioni generali per i partner CocoFit  </p>
                </div>
               

                <div >
                    <a style={{ margin:"10px" , padding:"10px",color:"black"}} href="https://www.instagram.com/corinnacocofit/" target="_blank" rel="noopener noreferrer" >
                        <span >
                            <i className="fab fa-instagram fa-2x"></i>
                        </span>
                      
                    </a>

                    <a style={{ margin:"10px" , padding:"10px" ,color:"black"}} href="https://www.tiktok.com/@laaustriacavenezolana?"  target="_blank" rel="noopener noreferrer"> 
                        <span >
                        <i class="fab fa-tiktok fa-2x"></i>
                        </span>
                    </a>


                </div>

            </FooterContainer>


        </React.Fragment>
    )
}
