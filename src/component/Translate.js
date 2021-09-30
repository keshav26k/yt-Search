import React, { useState } from 'react';
import Dropdown from './Dropdown';
import Convert from './Convert';

const options = [
    {
        label: 'hindi',
        value: 'hi',
    },
    {
        label: 'afrikaans',
        value: 'af',
    },
    {
        label: 'Dutch',
        value: 'nl',
    },
    {
        label: 'spanish',
        value: 'sp',
    },
    {
        label: 'English',
        value: 'en',
    }
]

const Transulate = ()=>{
    const [language, setLanguage] = useState('');
    const [text, setText] = useState('')



    return(
        <div>
            <div className="ui form">
                <div className="field">
                    <label> enter text</label>
                    <input value={text} onChange={(e)=> setText(e.target.value)}/>
                </div>
            </div>
            <Dropdown
             label="select a Language"
             selected={language} onSelectedChange={setLanguage}   
             options={options}/>
             <hr/>
             <h3 className="ui header">Output</h3>
             <Convert text={text} language={language}/>
        </div>
    );
}

export default Transulate;