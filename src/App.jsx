import { RecoilRoot } from 'recoil';
import Button from './components/Button';
import { BigButton, FillButton, SmallButton } from './components/FillButton';
import styled from 'styled-components';
import StyledBook from './components/Styledbook';

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  & button {
    margin-bottom: 10px;
  }
`;

const AppInput = styled.input.attrs(({ size, primary }) => ({
  // 정적 props
  type: 'text',
  className: 'appInput',
  // 동적 props 정의
  color: primary || '#06f',
  margin: size || '1em',
  padding: size || '1em',
}))`
  ${(props) => console.log(props) /* 전달된 props 확인! Console 패널 */}
  border: 2px solid ${({ color }) => color};
  border-radius: 3px;
  margin: ${({ margin }) => margin};
  padding: ${({ padding }) => padding};
  color: ${({ color }) => color};
  font-size: 1em;

  ::placeholder {
    color: ${({ color }) => color};
  }
`;

function App() {
  return (
    <RecoilRoot>
      <div>안녕하세요!</div>
      <Button>블루 버튼</Button>
      <Button reject>레드 버튼</Button>
      <ButtonGroup>
        <FillButton reject>FillButton</FillButton>
        <SmallButton>SmallButton</SmallButton>
        <BigButton>BigButton</BigButton>
      </ButtonGroup>

      <StyledBook radius='10px' border='6px double hsla(220, 99%, 50%, 0.68)'>
        스타일 북
      </StyledBook>

      <AppInput
        aria-label='이메일'
        type='email'
        size='0.2em'
        placeholder='E-Mail'
      />
      <AppInput
        aria-label='비밀번호'
        type='password'
        primary='#3bb98f'
        size='0.8em'
        placeholder='password'
      />
    </RecoilRoot>
  );
}

export default App;
