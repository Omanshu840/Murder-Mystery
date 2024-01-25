import React from 'react'
import RulesCard from './RulesCard';

const RulesSection = (props) => {
    const {title, cards} = props;

    return (
        <div className='rules-section container'>
            <div className='title'>{title}</div>
            <div className='row' style={{justifyContent: 'center'}}>
               {cards.map((card) => <RulesCard {...card}/>)}
            </div>
        </div>
    )
}

export default RulesSection