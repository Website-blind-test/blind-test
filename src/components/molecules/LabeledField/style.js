import styled from "styled-components"

export const StyledLabeledField = styled.fieldset`
    ${props => `color: ${props.theme.label};`}
    display: flex;
    flex-direction: column;
    width: fit-content;
    margin-top: 5rem;
    border: unset

`;