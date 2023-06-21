import { useState } from 'react';
import Button from './Button';
import StepMessage from './StepMessage';

const messages = [
  'Learn React ⚛️',
  'Apply for jobs 💼',
  'Invest your new income 🤑',
];

function Steps() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  const handlePrevButton = () => {
    if (step > 1) setStep((prevState) => prevState - 1);
  };

  const handleNextButton = () => {
    if (step < 3) setStep((prevState) => prevState + 1);
  };

  const handleOpenUp = () => {
    return setIsOpen((prevState) => !prevState);
  };
  return (
    <div>
      <button className='close' onClick={handleOpenUp}>
        &times;
      </button>
      {isOpen && (
        <div className='steps'>
          <div className='numbers'>
            <div className={step >= 1 ? 'active' : ''}>1</div>
            <div className={step >= 2 ? 'active' : ''}>2</div>
            <div className={step >= 3 ? 'active' : ''}>3</div>
          </div>
          <StepMessage step={step}>{messages[step - 1]}</StepMessage>
          <div className='buttons'>
            <Button
              textColor='#fff'
              bgColor='#7950f2'
              onClick={handlePrevButton}>
              <span>👈</span>Previous
            </Button>

            <Button
              textColor='#fff'
              bgColor='#7950f2'
              onClick={handleNextButton}>
              <span>👉</span>Next
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Steps;
