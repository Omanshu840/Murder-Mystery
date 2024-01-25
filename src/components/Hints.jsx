import React from 'react'
import Card from './Card'
import { hints } from '../data/main'
import { Button } from 'react-bootstrap'
import { screens } from '../constants'

const Hints = ({setScreen}) => {
    return (
        <div className="game-container">
            <div style={{textAlign: 'left', padding: '10px'}}>
                <Button variant="danger" onClick={() => setScreen(screens.RULES)}>Back</Button>
            </div>
            <div className="cards-container">
                {hints.map((hint, index) => <Card {...hint} id={index+1}/>)}
            </div>
        </div>
    )
}

export default Hints