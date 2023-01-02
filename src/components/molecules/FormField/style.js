import styled from "styled-components"

export const StyledFormField = styled.fieldset`
    color: #00FFD1;
    display: flex;
    flex-direction: column;
    width: 15rem;
    ${props => `margin-top: ${props.theme.marginTop};`}
    border: unset

`;