/*
 * TASKS 1-5 — ContactForm
 *
 * Build a contact form with name, email, message, a subject dropdown, and
 * a preferences checkbox group. Validate all fields on submit and show
 * inline errors. Derive form validity during render.
 *
 * Hooks: useState
 * Key patterns: single onChange handler, object state, derived validation state
 * TypeScript: React.ChangeEventHandler<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
 *
 * DOCS: https://react.dev/reference/react-dom/components/input
 */

import styles from './ContactForm.module.css';
import { useState } from 'react';

export function ContactForm() {
  const [formFieldValues, setFormFieldValues] = useState({
    name: '',
    email: '',
    message: '',
    subject: 'subject 1',
    preference1: false,
    preference2: false,
  });
  
  function handleInputChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
    key: string) 
  {
    setFormFieldValues((prev) => ({
      ...prev,
      [key]: e.target.value
    }));
  }

  function handleCheckboxChange(e: React.ChangeEvent<HTMLInputElement>, key: string) {
    setFormFieldValues((prev) => ({
      ...prev,
      [key]: e.target.checked
    }));
  }

  function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(formFieldValues);
  }

  return (
    <form className={styles.contactForm} onSubmit={handleSubmit}>
      <div className={styles.formField}>
        <label htmlFor='name'>Name:</label>
        <input
          id='name'
          type='text'
          name='name'
          value={formFieldValues.name}
          onChange={(e) => handleInputChange(e, 'name')}
          required
        />
      </div>
      <div className={styles.formField}>
        <label htmlFor='email'>Email:</label>
        <input
          id='email'
          type='email'
          name='email'
          value={formFieldValues.email}
          onChange={(e) => handleInputChange(e, 'email')}
          required
        />
      </div>
      <div className={styles.formField}>
        <label htmlFor='message'>Message:</label>
        <textarea
          id='message'
          className={styles.textAreaField}
          name='message'
          value={formFieldValues.message}
          onChange={(e) => handleInputChange(e, 'message')}
          required
        />
      </div>
      <div className={styles.formField}>
        <label htmlFor='subject'>Subject:</label>
        <select
          id='subject'
          name='subject'
          value={formFieldValues.subject}
          onChange={(e) => handleInputChange(e, 'subject')}
          required
        >
          <option value="subject 1">Subject 1</option>
          <option value="subject 2">Subject 2</option>
          <option value="subject 3">Subject 3</option>
        </select>
      </div>
      <fieldset>
        <legend>Choose your preferences</legend>
        <div>
          <input
            type="checkbox"
            id="preference1"
            name="preference1"
            checked={formFieldValues.preference1}
            onChange={(e) => handleCheckboxChange(e, 'preference1')}
          />
          <label htmlFor="preference1">Preference 1</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="preference2"
            name="preference2"
            checked={formFieldValues.preference2}
            onChange={(e) => handleCheckboxChange(e, 'preference2')}
          />
          <label htmlFor="preference2">Preference 2</label>
        </div>
      </fieldset>
      <input type="submit" value="Submit" />
    </form>
  );
}
