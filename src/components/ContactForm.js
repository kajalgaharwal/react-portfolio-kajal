import '../components/ContactFormStyles.css';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [disableBtn, setDisableBtn] = useState(false);
  const form = useRef();
  const submitHandler = e => {
    e.preventDefault();
    setDisableBtn(true);
    emailjs
      .sendForm(
        'service_1jom5gr',
        'template_eh0va38',
        form.current,
        '9lNwVqkfye5yR2C5z'
      )
      .then(
        result => {
          setName('');
          setEmail('');
          setMessage('');
          toast.success('Message Sent');
          // console.log(result.text);
        },
        error => {
          toast.error('Error');
          console.log(error);
          setDisableBtn(false);
          // console.log(error.text);
        }
      );
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
      <motion.form ref={form} onSubmit={submitHandler} {...animations.form}>
        <label> Name:</label>
        <input
          type='text'
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder='Your Name'
          name='name'
          required
        />
        <label> Email:</label>
        <input
          type='email'
          placeholder='Your Email'
          required
          name='email'
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <label> Message:</label>
        <textarea
          placeholder='Type your message here...'
          rows='10'
          required
          name='message'
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
            fontWeight: '600',
            cursor: 'pointer'
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
