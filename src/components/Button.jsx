import styled from 'styled-components';

const Button = styled.button`
  cursor: pointer;
  margin: 0 5px 0 0;
  border: 1px solid currentColor;
  border-radius: 4px;
  padding: 0.4em 0.76em;
  font-size: 2rem;
  color: ${(props) => (props.reject ? '#f60' : '#06f')};
`;

export default Button;
