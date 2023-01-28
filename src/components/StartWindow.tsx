import React from "react";
import styled from "styled-components";
import Button from "./Button"

interface StartWindowProps {
    ingame: boolean;
    onClick: () => void;
}
const Container = styled.div`
    text-align: center;
`
const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
`

const StartWindow: React.FC<StartWindowProps> = (props) => {
    const { onClick } = props;
    return (
        <>
            <Container>
                <h1>Explosion</h1>
                <ButtonContainer>
                    <Button value="start" onClick={onClick} />
                    <Button value="rules"></Button>
                </ButtonContainer>
            </Container>
        </>
    )
}

export default StartWindow;