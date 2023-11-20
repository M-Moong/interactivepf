import PocketBase from 'pocketbase';
import React, {useEffect, useState} from 'react';

const pb = new PocketBase('https://pfpf.pockethost.io');


function Button() {

  return (
    <>
      <button type="button">버튼</button>
    </>
  );
}

export default Button;
