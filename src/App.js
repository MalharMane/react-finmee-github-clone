import React from 'react';

import Footer from './components/pages/Footer';
import Homepage from './components/pages/Homepage';

import Heading from './components/title/Heading';
import Nato from './components/navbar/Nato';

import Gitcontent from './components/title/Gitcontent';


function App() {
  return (
    <div>

    <Heading></Heading>                    {/* Title of the NTWIST homepage */}
    <Nato></Nato>                          {/* Navbar */}
    <Homepage></Homepage>                  {/* homepage background image */}
      <Gitcontent></Gitcontent>       
    <Footer></Footer>                       {/* customised fotter fot ntwist */}
  
    </div>
  );
}

export default App;
