import styled from "styled-components"

export const StyledLabeledField = styled.fieldset`
    color: #00FFD1;
    display: flex;
    flex-direction: column;
    width: fit-content;
    ${props => `margin-top: ${props.theme.marginTop};`}
    border: unset

`;