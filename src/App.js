import React, { useState }from "react";
import Accordion from "./component/Accordion";
import Search from "./component/Search";
import Dropdown from "./component/Dropdown";
import Translate from "./component/Translate";
import Route from "./component/Route";
import Header from "./component/Header";

const items = [
  {
    title: 'what is react',
    context: 'react is a JS Framework'
  },
  {
    title: 'react',
    context: 'Framework', 
  },
  {
    title: 'galatic',
    context: 'britney Framework',
  },
];

const options =[
  {
    label: 'red is a color',
    value: 'red ',
  },
  {
    label: 'green is a color',
    value: 'green ',
  },
  {
    label: 'blue is a color',
    value: 'blue ',
  },
];

const App =() => {
  const [selected, setSelected] = useState(options[0]);
  return (
    <div className="App">
      <Header/>
      <Route path="/">
        <Accordion items={items} />
      </Route>
      <Route path='/list'>
        <Search/>
      </Route>
      <Route path='/dropdown'>
        <Dropdown 
          label="select a color"
          options={options}
          selected={selected}
          onSelectedChange={setSelected}
        />
      </Route>
      <Route path='/translate'>
        <Translate/>
      </Route>
        
    </div> 
  );
};


export default App;