import Button from './components/Button';
import React from 'react';
import { RecoilRoot } from 'recoil';

function App() {
  return (
    <RecoilRoot>
      <div>안녕하세요!</div>
      <Button />
    </RecoilRoot>
  );
}

export default App;
