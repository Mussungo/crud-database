import styled from "styled-components"

export const StyledButton = styled.button`
  color: white;
  background: darkblue;

  width: 10rem;
  height: 5rem;

  background: ${props => props.variant === 'red' ? 'red' : 'darkBlue'};
`