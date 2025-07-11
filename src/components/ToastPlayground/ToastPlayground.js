import React from 'react';

import Button from '../Button';

import { ToastContext } from '../ToastProvider/ToastProvider';
import styles from './ToastPlayground.module.css';
import ToastShelf from '../ToastShelf/ToastShelf';

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];
const defaultVariant = VARIANT_OPTIONS[0];

function ToastPlayground() {
  const [message, setMessage] = React.useState('');
  const [variant, setVariant] = React.useState(defaultVariant);
  const { addToast } = React.useContext(ToastContext)

  const popToast = () => {
    const newToast = { id: crypto.randomUUID(), message, variant };
    addToast(newToast);
    setMessage('');
    setVariant(defaultVariant);
  }

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      <ToastShelf />

      <form
        onSubmit={event => {
          event.preventDefault();
          popToast()
        }}
      >
        <div className={styles.controlsWrapper}>
          <div className={styles.row}>
            <label
              htmlFor="message"
              className={styles.label}
              style={{ alignSelf: 'baseline' }}
            >
              Message
            </label>
            <div className={styles.inputWrapper}>
              <textarea id="message" value={message} onChange={(event) => setMessage(event.target.value)} className={styles.messageInput} />
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.label}>Variant</div>
            <div
              className={`${styles.inputWrapper} ${styles.radioWrapper}`}
            >
              {VARIANT_OPTIONS.map((variantOption) => (
                <React.Fragment key={`variant-${variantOption}`}>
                  <label htmlFor={`variant-${variantOption}`}>
                    <input
                      id={`variant-${variantOption}`}
                      type="radio"
                      name="variant"
                      value={variantOption}
                      checked={variant === variantOption}
                      onChange={(event) => setVariant(event.target.value)}
                      />
                    {variantOption}
                  </label>
                </React.Fragment>
              ))}
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.label} />
            <div
              className={`${styles.inputWrapper} ${styles.radioWrapper}`}
            >
              <Button>Pop Toast!</Button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ToastPlayground;
