// Write your Character component here
import React, { useState } from "react";
import styled from "styled-components";
import CharacterInfo from "./CharacterInfo";

const StyledCharacters = styled.div`
    width: 50%;
    margin: 1% auto;
    background-color: #b9936c;
    border-radius: 25px;

    .name {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1% 2%;
    }
`

const Character = ({ character }) => {

    const [expanded, setExpanded] = useState(false);

    const toggleExpand = () => {
        if (!expanded) {
            setExpanded(true);
        } else {
            setExpanded(false);
        }
      }

    return (
        <StyledCharacters >
            <div className="name" onClick={toggleExpand}>
                <h2>{character.name}</h2>
                <h2>{!expanded ? '+' : '-'}</h2>
            </div>
            {expanded && <CharacterInfo character={character}/>}
        </StyledCharacters>
    )
}

export default Character;