import React from 'react'

const RulesCard = (props) => {
    const {imgLink, name} = props;

    return (
        <div className='col-6' style={{padding: '10px'}}>
            <div className='rules-card' >
                <img src={imgLink} alt="rules-card"/>
                <div style={{padding: '5px'}}>{name}</div>
            </div>
        </div>
    )
}

export default RulesCard