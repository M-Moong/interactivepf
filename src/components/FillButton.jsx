import styled from 'styled-components';
import Button from './Button';

// ——————————————————————————————————————————————————————————————————————
// Button 확장
// ——————————————————————————————————————————————————————————————————————

// 배경색 채움 버튼
export const FillButton = styled(Button)`
  border: 0;
  padding: 0.45em 0.95em 0.6em;
  background-color: ${(props) => (props.reject ? '#014' : '#06f')}
  color: ${(props) => (props.reject ? '#0cf' : '#fff')}
  font-weight: 600
`;

// 버큰 크기 조절
export const BigButton = styled(Button)`
  padding-bottom: 0.5em;
  font-size: 1.2rem;
  font-weight: 700;
  line-height: 1;
`;

export const SmallButton = styled(Button)`
  padding: 0.3em 0.6em 0.4em;
  font-size: 0.75rem;
`;
