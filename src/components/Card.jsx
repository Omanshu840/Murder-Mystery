import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

const Card = (props) => {
    const {password, hint, id} = props;
    const [isLocked, setIsLocked] = useState(!localStorage.getItem(`hintCard:${id}:isUnlocked`));
    const [inputPassword, setPassword] = useState('');
    const [incorrectPassword, setIncorrectPassword] = useState(false);
  
    const checkPassword = () => {
        if (inputPassword === password) {
            setIsLocked(false);
            localStorage.setItem(`hintCard:${id}:isUnlocked`, true);
        } else {
            setIsLocked(true);
            setIncorrectPassword(true)
        }
    };
  
    return (
        <div className={`hint-card`}>
            {isLocked ? (
                <>
                    <p className='id'>{id}</p>
                    <Form.Control type="text" placeholder="Enter Pin" value={inputPassword} onChange={(e) => setPassword(e.target.value)}/>
                    {incorrectPassword && <Form.Text>
                        Incorrect Password!
                    </Form.Text>}
                    <br/>
                    <Button variant="danger" onClick={checkPassword}>Unlock</Button>
                </>
            ) : (
                <p>{hint}</p>
            )}
        </div>
    );
};

export default Card;