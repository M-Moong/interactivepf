import PocketBase from 'pocketbase';
import { useEffect, useState } from 'react';

const pb = new PocketBase('https://pfpf.pockethost.io');

function Button() {
  const [data, setData] = useState();

  useEffect(() => {
    async function getProductsImage() {
      try {
        const readProduct = await pb.collection('test').getFullList();

        setData(readProduct);
        console.log(readProduct);
      } catch (error) {
        console.error(error);
      }
    }

    getProductsImage();
  }, []);

  return (
    <>
      <button type="button">버튼</button>
      <button type="button">{data.length}</button>
    </>
  );
}

export default Button;
