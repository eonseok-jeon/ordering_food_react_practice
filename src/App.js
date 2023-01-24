import React from 'react';
import Main from './components/main/Main';
import Nav from './components/Nav';

const App = () => {
  return (
    <React.Fragment>
      <Nav />
      <Main>
        <article>
          <p></p>
          <p></p>
        </article>
        <article>
          <div>
            <p></p>
            <p></p>
            <p></p>
          </div>
          <div>
            <p></p>
            <p></p>
            <button></button>
          </div>
        </article>
      </Main>
    </React.Fragment>
  );
};

export default App;
