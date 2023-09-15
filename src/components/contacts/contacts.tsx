import { useEffect, useState } from 'react';
import ScrollLock, { TouchScrollable } from 'react-scrolllock';

import TopBar from './top-bar/top-bar';
import LeftBar from './left-bar/left-bar';
import ContactForm from './contact-form/contact-form';

import './contacts.css';

type ComponentProps = {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

function Contacts(props: ComponentProps) {
  const [isDisplayed, setIsDisplayed] = useState(false);

  const handleClose = (event: React.MouseEvent) => {
    event.preventDefault();
    if (event.target === event.currentTarget) {
      setIsDisplayed(false);
    }
  };

  const handleTransition = () => {
    !isDisplayed && props.setIsOpen(false);
  };

  useEffect(() => {
    setIsDisplayed(true);
  }, [setIsDisplayed]);

  return (
    <ScrollLock>
      <div
        className={`contacts-background ${isDisplayed && 'contacts-background-shown'}`}
        onClick={(event: React.MouseEvent<HTMLElement>) => handleClose(event)}
        onTransitionEnd={handleTransition}
      >
        <div className={`contacts ${isDisplayed && 'contacts-shown'}`}>
          <TopBar handleClose={handleClose} setIsDisplayed={setIsDisplayed} />
          <TouchScrollable>
            <div className="contacts__box">
              <LeftBar />
              <ContactForm />
            </div>
          </TouchScrollable>
        </div>
      </div>
    </ScrollLock>
  );
}

export default Contacts;
