import React from 'react';
import {mainData} from '../data/main';
import { Button } from 'react-bootstrap';
import { screens } from '../constants';

const WelcomeScreen = ({ setScreen }) => {
    return (
        <div className="welcome-screen">
            <h1 className='title'>{mainData.title}</h1>
            <Button variant="danger" onClick={() => setScreen(screens.RULES)}>Solve</Button>
            {/* <button onClick={setScreen}>Start Hunt</button> */}
        </div>
    );
};

export default WelcomeScreen;