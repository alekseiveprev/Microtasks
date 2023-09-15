import { FC } from 'react';
import { Body } from './site/Body';
import { Footer } from './site/Footer';
import { Header } from './site/Header';

import './style.css';

export const App: FC<{ name: string }> = ({ name }) => {
  return (
    <div>
      <Header title={'NEW Header'} />
      <Body titleForBody={'NEW Body'} />
      <Footer titleForFooter={'NEW Footer'} />
      {/* <h1>Hello {name}!</h1>
      <p>Start editing to see some magic happen :)</p> */}
    </div>
  );
};
