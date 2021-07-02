import './App.css';
import React from 'react';
import Component_C from './components/Component_C';

export const UserContext = React.createContext();

const App = () => {
  return (
    <div>
      <UserContext.Provider value='Telugu SkillHub'>
        <Component_C />
      </UserContext.Provider>
    </div>
  )
}

export default App
