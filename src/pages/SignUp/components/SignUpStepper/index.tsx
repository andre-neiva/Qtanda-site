// No componente SignUpStepper
import React from 'react';
import BasicDetails from './components/BasicDetails/BasicDetails';
import SelectTime from './components/SelectTime';
import UploadPhoto from './components/UploadPhoto';

interface SignUpStepperProps {
  step: number;
}

const SignUpStepper: React.FC<SignUpStepperProps> = ({ step }) => {
  return (
    <div>
      {step === 1 && <UploadPhoto />}
      {step === 2 && <BasicDetails />}
      {step === 3 && <SelectTime />}
    </div>
  );
};

export default SignUpStepper;
