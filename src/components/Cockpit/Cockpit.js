import React, { useEffect, useRef } from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {

    const toggleBtnRef = useRef(null);


    useEffect(() => {
        console.log('[Cockpit.js] useEffect');
        // http request can go here
        // setTimeout(() => {
        //     alert('Saved data to cloud');
        // },1000);
        toggleBtnRef.current.click();
        return () => {
            console.log('[Cockpit.js] cleanup work in useEffect');
        };
    }, []); // array of variables useEffect depends on, therefore it it's empty, this will only run on the initial render! (componentDidMount, but not componentDidUpdate)


    useEffect(() => {
        console.log('[Cockpit.js] 2nd useEffect');
        return () => {
            console.log('[Cockpit.js] cleanup work in 2nd useEffect');
        };
    });

    const assignedClasses = [];
    if (props.personsLength <= 2) {
      assignedClasses.push(classes.red); // classes = ['red']
    }
    if (props.personsLength <=1) {
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
            <button 
                ref={toggleBtnRef}
                className={btnClass}
                onClick={props.clicked}
            >
                Toggle People
            </button>
        </div>
    );
};

export default React.memo(cockpit);