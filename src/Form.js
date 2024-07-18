import React, { useState } from 'react'
import './Form.css'

/**
 *Controlled Inputs -->. Associate with the state values
 We Would HAVE THE Following 
 * @returns 
 */

function Form() {
    const [fname, setFname] = useState('');
    const [email, setEmail] = useState('');
    const [people,setPeople] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
       if(fname && email)
       {
        const person = {id:new Date().getTime().toString(),fname:fname,email:email}
        console.log(fname, email);
        console.log(person)
        setPeople((people)=>{
            return [...people,person]
        });
        setFname("");
        setEmail("");
       }
       else
       {

       }
    };



    return (
        <>
            <div className='a1' style={{ backgroundColor: "black" }}>
                <h1>Forms | Additional Forms | Input Section</h1>

                <article>
                    <form className='' onSubmit={handleSubmit}>
                        <div className='form-control'>
                            <label htmlFor="firstName">Name</label>
                            <input
                                type='text'
                                id="firstName"
                                name="firstName"
                                value={fname}
                                onChange={(e) => setFname(e.target.value)}
                            />
                        </div>

                        <div className='form-control'>
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


                    {
                        people.map((person, index) => {
                            const { fname, email } = person;
                            return (
                                <div key={index}>
                                    <h4>{fname}</h4>
                                    <p>{email}</p>
                                </div>
                            );
                        })
                    }
                </article>
            </div>
        </>
    )
}

export default Form;
