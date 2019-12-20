import React from 'react';
import LanguageContext from '../contexts/LanguageContext';

class Field extends React.Component {
  /*Example when accessing React Context with this.context */
  static contextType = LanguageContext;

  render() {
    return (
      <div className='ui field'>
        <label>{this.context === 'english' ? 'Name' : 'Naam'}</label>
        <input />
      </div>
    );
  }
}

export default Field;
