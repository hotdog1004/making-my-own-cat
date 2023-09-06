import React, { Fragment, useState } from 'react';
import contents from '../../pages/contents/questions';
import Radio from 'components/Radio';
const Socks = () => {
  const [selectedValue, setSelectedValue] = useState('');
  return (
    <div className="flex flex-wrap justify-center w-full">
      {contents[1].answers.map((answer) => (
        <Fragment key={answer.id}>
          <Radio
            id={answer.id}
            img={answer.img}
            name={contents[1].id}
            onChange={() => setSelectedValue(answer.id)}
            checked={selectedValue == answer.id}
          />
        </Fragment>
      ))}
    </div>
  );
};

export default Socks;
