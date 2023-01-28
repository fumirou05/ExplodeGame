import React, {useState} from "react";
import styled from "styled-components";

interface ButtonProps {
    value: string;
    onClick?: () => void;
}
const StyledInput = styled.input`
   flex: 1; 
`

const Button: React.FC<ButtonProps> = (props) => {
    const { value, onClick } = props;
    return (
        <>
            <StyledInput value={value} type="button" onClick={onClick}/>
        </>
    )
}

export default Button;