import React from "react";
import styled from "styled-components";

const StyledInfo = styled.div`
    background-color: #b9936c;
    padding-bottom: 2%;
    table {
        width: 95%;
        margin: auto;
        text-align: left;
        th, td {
            padding: 3% 1%;
        }
        .keys {
            width: 30%;
            background-color: #dac292;
        }
        .values {
            background-color: #e6e2d3;
        }
    }
`

const CharacterInfo = ({ character }) => {
    return (
        <StyledInfo>
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
                        <td>{character.height} cm</td>
                    </tr>
                    <tr>
                        <th>Mass</th>
                        <td>{character.mass} kg</td>
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
        </StyledInfo>
    )
}

export default CharacterInfo;