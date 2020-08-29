import React, { useEffect } from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {

    useEffect(() => {
        console.log('[Cockpit.js] useEffect');
        // http request can go here
        setTimeout(() => {
            // alert('Saved data to cloud');
        },1000);
    }, []); // array of variables useEffect depends on, therefore it it's empty, this will only run on the initial render! (componentDidMount, but not componentDidUpdate)

    const assignedClasses = [];
    if (props.persons.length <= 2) {
      assignedClasses.push(classes.red); // classes = ['red']
    }
    if (props.persons.length <=1) {
      assignedClasses.push(classes.bold); //classes = ['red', 'bold']
    }
    
    let btnClass = '';

    if (props.showPersons) {
        btnClass = classes.Red;
    }
    

    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(' ')}>This is really working!</p>
            <button className={btnClass}
            onClick={props.clicked}>
                Toggle People
            </button>
        </div>
    );
};

export default cockpit;