// src/components/Contact/Contact.js
import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaEnvelope } from 'react-icons/fa';

const ContactContainer = styled.section`
  min-height: 100vh;
  padding: 5rem 10%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: var(--primary-color);
  color: var(--secondary-color);
`;

const ContactTitle = styled(motion.h2)`
  font-size: clamp(2rem, 5vw, 3rem);
  margin-bottom: 1rem;
`;

const ContactSubtitle = styled(motion.p)`
  font-size: 1.2rem;
  color: var(--accent-color);
  margin-bottom: 3rem;
  max-width: 600px;
`;

const ContactEmail = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  margin-bottom: 2.5rem;
  color: var(--secondary-color);
`;

const EmailLink = styled.a`
  color: var(--secondary-color);
  text-decoration: underline;
`;

const Form = styled(motion.form)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  max-width: 800px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  
  &.full-width {
    grid-column: 1 / -1;
  }
`;

const Label = styled.label`
  font-size: 0.9rem;
  color: var(--accent-color);
`;

const Input = styled.input`
  padding: 1rem;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 4px;
  color: var(--secondary-color);
  font-family: var(--font-main);
  
  &:focus {
    outline: none;
    border-color: var(--secondary-color);
  }
`;

const Textarea = styled.textarea`
  padding: 1rem;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 4px;
  color: var(--secondary-color);
  font-family: var(--font-main);
  resize: vertical;
  min-height: 150px;
  
  &:focus {
    outline: none;
    border-color: var(--secondary-color);
  }
`;

const SubmitButton = styled(motion.button)`
  padding: 1rem 2rem;
  background-color: var(--secondary-color);
  color: var(--primary-color);
  border: none;
  border-radius: 4px;
  font-family: var(--font-main);
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  grid-column: 1 / -1;
  justify-self: start;
  
  &:hover {
    background-color: var(--accent-color);
  }

  &:disabled {
    opacity: 0.65;
    cursor: not-allowed;
  }
`;

const StatusMessage = styled.p`
  grid-column: 1 / -1;
  font-size: 0.95rem;
  color: var(--accent-color);
`;

const Contact = () => {
  const CONTACT_ENDPOINT = process.env.REACT_APP_CONTACT_ENDPOINT;
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState('');
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const openMailClient = () => {
    const mailtoUrl =
      `mailto:rajatrautan77@gmail.com` +
      `?subject=${encodeURIComponent(formData.subject)}` +
      `&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
      )}`;
    window.location.href = mailtoUrl;
  };

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('');
    setIsSubmitting(true);

    try {
      if (CONTACT_ENDPOINT) {
        const response = await fetch(CONTACT_ENDPOINT, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
          },
          body: JSON.stringify(formData)
        });

        if (!response.ok) {
          throw new Error('Submit failed');
        }

        resetForm();
        setStatus('Message sent successfully.');
      } else {
        openMailClient();
        setStatus('Your email client has been opened to send the message.');
      }
    } catch (error) {
      setStatus('Unable to send right now. Please email me directly at rajatrautan77@gmail.com.');
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <ContactContainer id="contact">
      <ContactTitle
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Get in Touch
      </ContactTitle>
      <ContactSubtitle
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Interested in working together? Fill out the form below, or reach me directly.
      </ContactSubtitle>
      <ContactEmail>
        <FaEnvelope aria-hidden="true" />
        <EmailLink href="mailto:rajatrautan77@gmail.com" aria-label="Email Rajat Rautan">
          rajatrautan77@gmail.com
        </EmailLink>
      </ContactEmail>
      <Form
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        onSubmit={handleSubmit}
      >
        <InputGroup>
          <Label htmlFor="name">Name</Label>
          <Input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
          />
        </InputGroup>
        <InputGroup>
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
          />
        </InputGroup>
        <InputGroup className="full-width">
          <Label htmlFor="subject">Subject</Label>
          <Input
            type="text"
            id="subject"
            name="subject"
            required
            value={formData.subject}
            onChange={handleChange}
          />
        </InputGroup>
        <InputGroup className="full-width">
          <Label htmlFor="message">Message</Label>
          <Textarea
            id="message"
            name="message"
            required
            value={formData.message}
            onChange={handleChange}
          />
        </InputGroup>
        <SubmitButton
          type="submit"
          disabled={isSubmitting}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </SubmitButton>
        {status ? <StatusMessage aria-live="polite">{status}</StatusMessage> : null}
      </Form>
    </ContactContainer>
  );
};

export default Contact;
