


import React, { useCallback, useState } from 'react'
import "./Form1.css";
import H1 from './H1.js';
import O1 from './O1.js';
import T1 from './T1.js'

function Form1() {




    const [fname,setfname] = useState("");
    const [email,setemail] = useState("");
    const [id1,setid]       = useState("");
    const [showDropdown, setShowDropdown] = useState(false);    
    const [people,setpeople] = useState([]);
    const [showCode, setShowCode] = useState(false); // State to manage code snippet visibility


        const toggleCodeVisibility = () => {
        setShowCode(!showCode);
    };
    

const handleClick = () => {
    setShowDropdown(!showDropdown);
  };


    const handleSubmit = (e)=>{
        e.preventDefault();
        if(fname && email &&id1)
            {

              



                const person = {id1:"",fname:fname,email:email}

                setpeople((people)=>{
                    return[...people,person]
                })
                setfname("");
                setemail("");
                setid("");
            }

    }







    const SubmitHandler = (e) =>{
        e.preventDefault();

          const fullDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
});

        if(fname && email)
        {
            const b = {id1:fullDate,fname:fname,email:email}
            
            setpeople((people)=>{
                return[...people,b]
            })
            
            setfname("")
            setemail("")
            setid("")
        }

    }

    /**
     * 


     * 
     * 
     */




  return (
    <>
                <div className='a1' style={{ margin:"12px" }}>
                <h1>Forms | Additional Forms | Input Section</h1>
                <T1/>
                

                <div className='mainpanel'>
                    <div className='r'></div>
                    <div className='y'> <h3></h3></div>
                    <div className='g'></div>

                    <div className='secin'>
                        
                        <div className='rsi'>
                            <h3>How it Works</h3>
                        </div>           

                        <div className='ysi' onClick={handleClick}>
                            <h3>About This Component</h3>
                            {showDropdown && <Dropdown />}
                        </div>

                        <div className='gsi'>
                            <h3>Resources</h3>
                        </div>
                    </div>
                </div>

                <article>
                    <form className='form' onSubmit={SubmitHandler} >
                        <div  className='form-control aa1'>
                            <label htmlFor="firstName">Name</label>
                            <input
                                type='text'
                                id="firstName"
                                name="firstName"
                                value={fname}
                                onChange={(e) => setfname(e.target.value)}
                            />
                        </div>

                        <div className='form-control aa1'>
                            <label htmlFor="Email">Email</label>
                            <input
                                type='text'
                                id="Email"
                                name="Email"
                                value={email}
                                onChange={(e) => setemail(e.target.value)}
                            />
                        </div>

                        <button type='submit'>Submit Here</button>
                    </form>













                <button onClick={toggleCodeVisibility} style={{ margin: "20px 0", padding: "10px 20px" }}>
                    {showCode  ? "Hide Code | Component" : "Show Code | Behind this component"}
                </button>

                {showCode && (
                    <div >
                        <div >
                              <pre>
                            <code className='csnippet'>
                                {`
import React, { useState } from 'react';
import "./Form1.css";



function Form1() {
    const [fname, setFname] = useState("");
    const [email, setEmail] = useState("");
    const [people, setPeople] = useState([]);
    const [showCode, setShowCode] = useState(false); 

    const handleSubmit = (e) => {
        e.preventDefault();
        if (fname && email) {
            const fullDate = 
            new Date().toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            });

            const person =
             { id1: fullDate, fname: fname, email: email };
            setPeople((people) => [...people, person]);

            setFname("");
            setEmail("");
        }
    };

     const toggleCodeVisibility = () => {
        setShowCode(!showCode);
    };

    return (
        <div className='a1' style={{ margin: "12px" }}>
            <h1>Forms | Additional Forms | Input Section</h1>
            <div className='mainpanel'>
                <div className='y'><h3></h3></div>
                <div className='r'></div>
                <div className='g'></div>
                <div className='secin'>
                    <div className='ysi'>
                        <h3>About</h3>
                    </div>
                    <div className='rsi'>
                        <h3>How it Works</h3>
                    </div>
                    <div className='gsi'>
                        <h3>Resources</h3>
                    </div>
                </div>
            </div>

            <article>
                <form className='form' onSubmit={handleSubmit}>
                    <div className='form-control aa1'>
                        <label htmlFor="firstName">Name</label>
                        <input
                            type='text'
                            id="firstName"
                            name="firstName"
                            value={fname}
                  onChange={(e) => setFname(e.target.value)}
                        />
                    </div>
                    <div className='form-control aa1'>
                        <label htmlFor="Email">Email</label>
                        <input
                            type='text'
                            id="Email"
                            name="Email"
                            value={email}
                 onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <button type='submit'>Submit Here</button>
                </form>

                <button onClick=
                {toggleCodeVisibility} 
                style={{ margin: "20px 0", padding: "10px 20px" }}>
                    {showCode ? "Hide Code" : "Show Code"}
                </button>


                 {
                        people.map((person, index) => {

                            const { id1,fname, email } = person;

  
                                return (
                                <div  className="renderer"  key={index}>
                                    <div className="renderer">
                                        <h4>{fname}</h4>
                                        <p>{email}</p>
                                        <p>Dated : {id1}</p>
                                    </div>    

                                </div>

                            );
  
                        })
                    }

                                `}


                            </code>
                        </pre>
                        </div>
                      
                    </div>
                )}











                    {
                        people.map((person, index) => {

                            const { id1,fname, email } = person;

  
                                return (
                                <div  className="renderer"  key={index}>
                                    <div className="renderer">
                                        <h4>{fname}</h4>
                                        <p>{email}</p>
                                        <p>Dated : {id1}</p>
                                    </div>    

                                </div>

                            );
  
                        })
                    }



                </article>
            </div>
    </>
  )
}


const Dropdown = () => {
  return (
    <div className="dropdown">
Detailed Report on Form1 Component in React
Overview
<p>The `Form1` component is a React functional component designed to gather user input (name and email), submit this data, and display it alongside a timestamp. It also features a code snippet visibility toggle and a dropdown menu for additional options.</p>
Code Breakdown
Imports and Initial Setup
<p>The component begins by importing necessary modules: React, the `useState` hook, and custom CSS and other components (`H1`, `O1`, and `T1`). These imports facilitate the creation of a stateful, styled component with modular sub-components.</p>
State Variables
<p>The component uses several state variables to manage the input data and UI behavior:</p>
- <p><strong>fname</strong>: Stores the user's first name.</p>
- <p><strong>email</strong>: Stores the user's email.</p>
- <p><strong>id1</strong>: Stores an ID or timestamp for each entry.</p>
- <p><strong>showDropdown</strong>: Manages the visibility of a dropdown menu.</p>
- <p><strong>people</strong>: An array that holds the list of people who have submitted the form.</p>
- <p><strong>showCode</strong>: Controls the visibility of the code snippet.</p>
Event Handlers
<p>Several event handlers are defined to manage form submission and UI interactions:</p>
- <p><strong>toggleCodeVisibility</strong>: Toggles the display of the code snippet.</p>
- <p><strong>handleClick</strong>: Toggles the dropdown menu visibility.</p>
- <p><strong>handleSubmit</strong>: Processes form submission, ensuring that all fields are filled before adding a new person to the list.</p>
- <p><strong>SubmitHandler</strong>: Similar to `handleSubmit`, but includes a formatted timestamp for each new entry.</p>
Render Method
<p>The render method defines the structure and layout of the component:</p>
- <p><strong>Container Div</strong>: A main container div (`a1`) with some margin for spacing.</p>
- <p><strong>Title and Sub-components</strong>: Displays the main title and includes the `T1` component.</p>
- <p><strong>Main Panel</strong>: Contains sections with placeholders for additional content (represented by divs with classes `r`, `y`, `g`).</p>
- <p><strong>Section Information</strong>: Provides headings for "How it Works," "About This Component," and "Resources." The "About This Component" section includes the dropdown toggle functionality.</p>
- <p><strong>Form Section</strong>: The form allows users to input their name and email, and submit this information. Upon submission, the data is processed and stored in the `people` array.</p>
- <p><strong>Code Toggle Button</strong>: A button that toggles the visibility of the code snippet, showing or hiding it based on user interaction.</p>
- <p><strong>People List</strong>: Renders the list of submitted names and emails along with the timestamp, displaying them dynamically as new entries are added.</p>
Components
<p>Key components and their functions within the `Form1` component include:</p>
- <p><strong>Form Section</strong>: Contains input fields for the user's name and email, and a submit button to add this information to the list.</p>
- <p><strong>Code Toggle Button</strong>: Allows the user to show or hide the embedded code snippet.</p>
- <p><strong>Code Snippet Section</strong>: Displays the actual code of the component when toggled on, providing insight into its implementation.</p>
- <p><strong>Dropdown Menu</strong>: A collapsible menu that appears when the "About This Component" heading is clicked, offering additional options or information.</p>
- <p><strong>People List</strong>: Dynamically renders each entry from the `people` array, showing the name, email, and submission date.</p>
Summary
<p>The `Form1` component effectively demonstrates the use of React's state management and event handling to create an interactive and functional form. It includes additional features like a dropdown menu and a code visibility toggle, enhancing its usability and educational value.</p>






    </div>
  );
};

export default Form1;