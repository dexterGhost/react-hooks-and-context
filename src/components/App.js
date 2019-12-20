import React from 'react';
import ResourceList from './ResourceList';
import UserList from './UserList';
import UserCreate from './UserCreate';
import LanguageContext from '../contexts/LanguageContext';

class App extends React.Component {
  state = { resource: 'posts', language: 'english' };

  onLanguageChange = language => {
    this.setState({ language });
  };

  render() {
    return (
      <div className='ui container'>
        <h2>Example of Context System</h2>
        <div>
          <span style={{ marginRight: '10px' }}>Select a language:</span>
          <i
            className='flag us'
            onClick={() => this.onLanguageChange('english')}
          />
          <i
            className='flag nl'
            onClick={() => this.onLanguageChange('dutch')}
          />
        </div>
        {/* React Context System. Parent component gives a Provider */}
        <LanguageContext.Provider value={this.state.language}>
          <UserCreate />
        </LanguageContext.Provider>
        <br />
        <hr />
        <div>
          <h2>Example of React Hooks</h2>
          <div>
            <button onClick={() => this.setState({ resource: 'posts' })}>
              Posts
            </button>
            <button onClick={() => this.setState({ resource: 'todos' })}>
              Todos
            </button>
          </div>
          <h3>{`${this.state.resource} list`}</h3>
          <ResourceList resource={this.state.resource} /> {/* React Hook */}
          <hr />
          <h3>user list</h3>
          <UserList /> {/* React Hook */}
        </div>
      </div>
    );
  }
}

export default App;
