import '../components/ContactFormStyles.css';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../firebase';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [disableBtn, setDisableBtn] = useState(false);

  const submitHandler = async e => {
    e.preventDefault();
    setDisableBtn(true);
    try {
      await addDoc(collection(db, 'contacts'), {
        name,
        email,
        message
      });
      setName('');
      setEmail('');
      setMessage('');
      toast.success('Message Sent');
      setDisableBtn(false);
    } catch (error) {
      toast.error('Error');
      console.log(error);
      setDisableBtn(false);
    }
  };
  const animations = {
    form: {
      initial: {
        x: '-100%',
        opacity: 0
      },
      whileInView: {
        x: 0,
        opacity: 1
      }
    },

    button: {
      initial: {
        y: '-100%',
        opacity: 0
      },
      whileInView: {
        y: 0,
        opacity: 1
      },
      transition: {
        delay: 0.5
      }
    }
  };
  return (
    <div className='form'>
      <motion.form onSubmit={submitHandler} {...animations.form}>
        <label> Name:</label>
        <input
          type='text'
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder='Your Name'
          required
        />
        <label> Email:</label>
        <input
          type='email'
          placeholder='Your Email'
          required
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <label> Message:</label>
        <textarea
          placeholder='Type your message here...'
          rows='10'
          required
          value={message}
          onChange={e => setMessage(e.target.value)}></textarea>
        <motion.button
          style={{
            padding: '12px 32px',
            fontSize: '1rem',
            textTransform: 'uppercase',
            backgroundColor: 'rgb(248, 217, 15)',
            color: '#222',
            border: '1px solid #fff',
            fontWeight: '600'
          }}
          disabled={disableBtn}
          className={disableBtn ? 'disableBtn' : ''}
          {...animations.button}
          type='submit'>
          Submit
        </motion.button>
      </motion.form>
    </div>
  );
};

export default ContactForm;
