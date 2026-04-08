import React, { useState } from 'react';
import Header from '../components/Header'
import Footer from '../components/Footer'

function ContactPage() {
    const formClass = 'border border-gray-300 rounded p-2 my-1 ml-2 mr-7'
    const [contact, setContact] =  useState({
        name: '',
        email: '',
        message: ''
    });
    const [messages, setMessages] = useState([]);

    const submitForm = (e) => {
        e.preventDefault();

        setMessages([...messages, contact]);
        setContact({name: '', email: '', message: ''})

        console.log(messages)
    };


    return (
        <div className='flex flex-col min-h-screen'>
            <Header />
            <div className='flex-grow'>
                <h1 className='m-2 text-xl'>Contact</h1>
                <form className='flex flex-col gap-2' onSubmit={submitForm}>
                    <input 
                        placeholder='name'
                        className={formClass}
                        value={contact.name}
                        onChange={(e) => setContact({...contact, name: e.target.value})}
                    />
                    <input
                        placeholder='email'
                        className={formClass}
                        value={contact.email}
                        onChange={(e) => setContact({...contact, email: e.target.value})}
                    />
                    <textarea
                        placeholder='message'
                        className={formClass}
                        value={contact.message}
                        onChange={(e) => setContact({...contact, message: e.target.value})}
                    />

                    <button
                        type='submit'
                        className='m-2 bg-purple-600 text-white px-4 py-2 rounded-lg w-fit'
                    >Submit
                    </button>
                </form>

                
            </div>

            <Footer />
        </div>
  )
}

export default ContactPage