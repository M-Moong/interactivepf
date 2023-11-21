import Book from './Book';
import styled from 'styled-components';

const StyledBook = styled(Book)`
  padding: 0.8em;
  font: 16px/1 Verdana;
  border-radius: ${(props) => props.radius || 0};
  border: ${(props) => props.border || '3px solid #06f'};
  color: ${(props) => props.primary || '#06f'};
`;

export default StyledBook;
