import React from 'react'
import styled from 'styled-components'
import Navbar from './Navbar'


const Banner = styled.div`

    background-color: ;
    display:flex;
    h1{
        background-color: gainsboro;
    }
    img{


      
        

    }
`

export default function Home() {
    return (
        <div>
            <Navbar/>
           
            <Banner>
            <h1>your body deserves to be strong and healthy</h1>

            <img loading="lazy" src="/image/silueta.svg" allt="Hola" />
          

            </Banner>
           
        </div>
    )
}
