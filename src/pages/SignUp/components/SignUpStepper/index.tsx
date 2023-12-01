// No componente SignUpStepper
import React from 'react';
import UploadPhoto from './components/UploadPhoto';
import BasicDetails from './components/BasicDetails';
import SelectTime from './components/SelectTime';


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
