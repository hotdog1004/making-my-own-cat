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
  onNext: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const QuizFunnel = () => {
  const movePage = useNavigate();
  const [step, setStep] = useState<
    'HairColor' | 'Socks' | 'NoseColor' | 'Jelly' | 'Jewel' | 'Name'
  >('HairColor');
  return (
    <>
      <ProgressBar completed={1} />
      {step === 'HairColor' && <HairColor onNext={() => setStep('Socks')} />}
      {step === 'Socks' && <Socks onNext={() => setStep('NoseColor')} />}
      {step === 'NoseColor' && <NoseColor onNext={() => setStep('Jelly')} />}
      {step === 'Jelly' && <Jelly onNext={() => setStep('Jewel')} />}
      {step === 'Jewel' && <Jewel onNext={() => setStep('Name')} />}
      {step === 'Name' && <Name onNext={() => movePage('/result')} />}
    </>
  );
};

export default QuizFunnel;
