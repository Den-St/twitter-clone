import React from 'react';
import {ModalContainer, ModalWrapper} from "./style";



export const Modal = ({children}) => {
    return <ModalContainer>
        <ModalWrapper>
            {children}
    </ModalWrapper>
    </ModalContainer>
}