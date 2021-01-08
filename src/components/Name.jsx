import React from 'react';
const NameCard = props => {
    return(
        <div>
            <h1>{props.lastname}, {props.firstname} </h1>
            <p> Age: {props.age} </p>
            <p>Hair-Color: {props.hair} </p>
        </div>
    );
}
export default NameCard; 
