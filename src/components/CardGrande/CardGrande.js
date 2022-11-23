import React from 'react';
import { ImgCardGrande,LayoutCardGrande,TituloCardGrande } from './styles';



export default function CardGrande(props) {
   
    return (
        <LayoutCardGrande>
            <ImgCardGrande src={ props.imagem } />
          
                <TituloCardGrande>{ props.nome }</TituloCardGrande>
                <p>{ props.descricao}</p>
           
        </LayoutCardGrande>
    )
}