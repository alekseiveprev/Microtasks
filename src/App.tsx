import { FC, useState } from 'react';
import { NewComponent } from './map_method/NewComponent';
import { TopCars } from './map_method/TopCars';
import { Body } from './site/Body';
import { Footer } from './site/Footer';
import { Header } from './site/Header';

import './style.css';

export const App: FC<{ name: string }> = ({ name }) => {
  /*  const topCars = [
      {manufacturer:'BMW', model:'m5cs'},
      {manufacturer:'Mercedes', model:'e63s'},
      {manufacturer:'Audi', model:'rs6'}
  ] */

  const [students, setStudents] = useState([
    { id: 1, name: 'James', age: 8 },
    { id: 2, name: 'Robert', age: 18 },
    { id: 3, name: 'John', age: 28 },
    { id: 4, name: 'Michael', age: 38 },
    { id: 5, name: 'William', age: 48 },
    { id: 6, name: 'David', age: 58 },
    { id: 7, name: 'Richard', age: 68 },
    { id: 8, name: 'Joseph', age: 78 },
    { id: 9, name: 'Thomas', age: 88 },
    { id: 10, name: 'Charles', age: 98 },
    { id: 11, name: 'Christopher', age: 100 },
  ]);

  return (
    <NewComponent students={students} />

    /* <TopCars table={topCars} /> */
    /*  <TopCars topCars={topCars} />*/

    /*<>
         {/!* <NewComponent/>*!/}


          {/!*<Header title={"NEW Header"}/>
          <Body titleForBody={"NEW BODY"}/>
          <Fotter titleForBody={"New fotter"}/>*!/}


      </>*/

    /*<div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>*/
  );

  /*  <div>
      <Header title={'NEW Header'} />
      <Body titleForBody={'NEW Body'} />
      <Footer titleForFooter={'NEW Footer'} />
      <h1>Hello {name}!</h1>
      <p>Start editing to see some magic happen :)</p>
    </div> */
};
