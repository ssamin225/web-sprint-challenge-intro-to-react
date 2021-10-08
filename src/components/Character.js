// Write your Character component here
import React from "react";
import styled from "styled-components";

const StyledCharacters = styled.div`
    width: 50%;
    margin: auto;
    background-color: #b9936c;

    table {
        width: 95%;
        margin: auto;
        text-align: left;
        .keys {
            background-color: #dac292;
        }
        .values {
            background-color: #e6e2d3;
        }
    }
`

const Character = ({ character }) => {
    return (
        <StyledCharacters>
            <h2>{character.name}</h2>
            <table>
                <colgroup>
                        <col span='1' className='keys'/>
                        <col span='1' className='values'/>
                </colgroup>
                <tbody>
                    <tr>
                        <th>Birth Year</th>
                        <td>{character.birth_year}</td>
                    </tr>
                    <tr>
                        <th>Gender</th>
                        <td>{character.gender}</td>
                    </tr>
                    <tr>
                        <th>Height</th>
                        <td>{character.height}</td>
                    </tr>
                    <tr>
                        <th>Mass</th>
                        <td>{character.mass}</td>
                    </tr>
                    <tr>
                        <th>Hair Color</th>
                        <td>{character.hair_color}</td>
                    </tr>
                    <tr>
                        <th>Eye Color</th>
                        <td>{character.eye_color}</td>
                    </tr>
                    <tr>
                        <th>Skin Color</th>
                        <td>{character.skin_color}</td>
                    </tr>
                </tbody>
            </table>
        </StyledCharacters>
    )
}

export default Character;