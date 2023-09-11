import ProgressBar from 'components/ProgressBar';
import HairColor from 'components/quizzes/HairColor';
import Jelly from 'components/quizzes/Jelly';
import Jewel from 'components/quizzes/Jewel';
import Name from 'components/quizzes/Name';
import NoseColor from 'components/quizzes/NoseColor';
import Socks from 'components/quizzes/Socks';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export interface FunnelProp {
  onNext: (e: React.MouseEvent<HTMLButtonElement>, param: string) => void;
}

type stepType = Record<string, number>;
const stepWidth: stepType = {
  HairColor: 1,
  Socks: 2,
  NoseColor: 3,
  Jelly: 4,
  Jewel: 5,
  Name: 6,
};

const QuizFunnel = () => {
  const movePage = useNavigate();
  const [step, setStep] = useState<
    'HairColor' | 'Socks' | 'NoseColor' | 'Jelly' | 'Jewel' | 'Name'
  >('HairColor');

  const [registerData, setRegisterData] = useState({
    hairColor: '',
    socks: '',
    noseColor: '',
    jelly: '',
    jewel: '',
    name: '',
  });

  return (
    <>
      <ProgressBar completed={stepWidth[step]} />

      {step === 'HairColor' && (
        <HairColor
          onNext={(data, param) => {
            setRegisterData((prev) => ({ ...prev, hairColor: param }));
            setStep('Socks');
          }}
        />
      )}
      {step === 'Socks' && (
        <Socks
          onNext={(data, param) => {
            setRegisterData((prev) => ({ ...prev, socks: param }));
            setStep('NoseColor');
          }}
        />
      )}
      {step === 'NoseColor' && (
        <NoseColor
          onNext={(data, param) => {
            setRegisterData((prev) => ({ ...prev, noseColor: param }));
            setStep('Jelly');
          }}
        />
      )}
      {step === 'Jelly' && (
        <Jelly
          onNext={(data, param) => {
            setRegisterData((prev) => ({ ...prev, jelly: param }));
            setStep('Jewel');
          }}
        />
      )}
      {step === 'Jewel' && (
        <Jewel
          onNext={(data, param) => {
            setRegisterData((prev) => ({ ...prev, jewel: param }));
            setStep('Name');
          }}
        />
      )}
      {step === 'Name' && (
        <Name
          onNext={(data, param) => {
            setRegisterData((prev) => ({ ...prev, name: param }));
            console.log(registerData);
            movePage('/result');
          }}
        />
      )}
    </>
  );
};

export default QuizFunnel;
