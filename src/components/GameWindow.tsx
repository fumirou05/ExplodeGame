import React from "react";
import styled from "styled-components";
import Button from "./Button";

interface GameWindowProps {
    board: number[];
}
const ButtonContainer = styled.div`
    display: flex;
    width: 300px;
    height: 500px;
    align-items: center;
    flex-wrap: wrap;
`

const GameWindow: React.FC<GameWindowProps> = (props) => {
    const { board } = props;
    return (
        <>
            <ButtonContainer>
                {board.map(b => {
                    return <Button value={b.toString()}></Button>
                })}
            </ButtonContainer>
        </>
    )
}

export default GameWindow;