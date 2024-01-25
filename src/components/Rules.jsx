import React from 'react'
import { killers } from '../data/killers'
import RulesSection from './RulesSection'
import { weapons } from '../data/weapons'
import { Button } from 'react-bootstrap'
import { screens } from '../constants'


const Rules = ({setScreen}) => {
    const sections = [
        {
            title: 'Murderer',
            cards: killers
        }, {
            title: 'Weapon',
            cards: weapons
        }
    ]
    return (
        <div className='rules'>
            <div style={{textAlign: 'right', padding: '10px'}}><Button variant="danger" onClick={() => setScreen(screens.HINTS)}>Next</Button></div>
            {sections.map(section => <RulesSection {...section}/>)}
        </div>
    )
}

export default Rules