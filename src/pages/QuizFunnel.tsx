import HairColor from 'components/quizzes/HairColor';
import Socks from 'components/quizzes/Socks';
import React, { useState } from 'react';

export interface FunnelProp {
  onNext: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const QuizFunnel = () => {
  const [step, setStep] = useState<'HairColor' | 'Socks'>('HairColor');
  return (
    <>
      {step === 'HairColor' && <HairColor onNext={() => setStep('Socks')} />}
      {step === 'Socks' && <Socks onNext={() => setStep('Socks')} />}
    </>
  );
};

export default QuizFunnel;
