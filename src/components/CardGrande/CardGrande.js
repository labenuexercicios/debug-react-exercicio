import React from 'react';
import { LayoutCardGrande, TituloCardGrande, ImgCardGrande, InfosCardGrande } from './styles';


export function CardGrande(props) {
   console.table(props);
    return (
        <LayoutCardGrande>
            <ImgCardGrande src={ props.nome} />
            <InfosCardGrande src={props.imagem}>
                <TituloCardGrande>{ props.nome }</TituloCardGrande>
                <p>{ props.descricao }</p>
            </InfosCardGrande>
        </LayoutCardGrande>
    )
}