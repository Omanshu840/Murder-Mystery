import React, { useState } from 'react';
import WelcomeScreen from './components/WelcomeScreen';
import { screens } from './constants';
import Rules from './components/Rules';
import Hints from './components/Hints';

const App = () => {
    const [screen, setScreen] = useState(screens.START);
  
    return (
		<>
			<div className='background-image'></div>
			<div className="app">
				{(screen===screens.START) && <WelcomeScreen setScreen={setScreen} />}
				{(screen===screens.RULES) && <Rules setScreen={setScreen}/>}
				{(screen===screens.HINTS) && <Hints setScreen={setScreen}/>}
			</div>
		</>
    );
};

export default App