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
  onNext: (e: React.MouseEvent<HTMLButtonElement>, param?: any) => void;
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

  const [registerData, setRegisterData] = useState({});

  return (
    <>
      <ProgressBar completed={stepWidth[step]} />
      {step === 'HairColor' && (
        <HairColor
          onNext={(data, param) => {
            console.log(data);
            console.log(param);
            setRegisterData((prev) => ({ ...prev, HairColor: data.target }));
            setStep('Socks');
          }}
        />
      )}
      {step === 'Socks' && <Socks onNext={() => setStep('NoseColor')} />}
      {step === 'NoseColor' && <NoseColor onNext={() => setStep('Jelly')} />}
      {step === 'Jelly' && <Jelly onNext={() => setStep('Jewel')} />}
      {step === 'Jewel' && <Jewel onNext={() => setStep('Name')} />}
      {step === 'Name' && <Name onNext={() => movePage('/result')} />}
    </>
  );
};

export default QuizFunnel;
