import { useState } from 'react';
import SignUpStepper from './components/SignUpStepper';

import './style.css';

export default function SignUp() {
  const [step, setStep] = useState(1);
  const [, setStep1Data] = useState('');
  const [, setStep2Data] = useState('');
  const [, setStep3Data] = useState('');

  const handleNext = (data: string) => {
    switch (step) {
      case 1:
        setStep1Data(data);
        break;
      case 2:
        setStep2Data(data);
        break;
      case 3:
        setStep3Data(data);
        break;
      default:
        break;
    }

    setStep(step + 1);
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  return (
    <>
      <div className="stepper-container">
        <SignUpStepper step={step} />
      </div>

      <div className="button-container">
        {step > 1 && (
          <button className="Btn" onClick={handleBack}>
            Voltar
          </button>
        )}
        {step <= 2 && (
          <button className="Btn" onClick={() => handleNext(`data do Passo ${step}`)}>
            Próximo
          </button>
        )}
        {step === 3 && (
          <button className="Btn" type="submit">
            Finalizar
          </button>
        )}
      </div>
    </>
  );
}
