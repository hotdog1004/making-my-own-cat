import React, { Fragment, useState } from 'react';
import contents from '../../pages/contents/questions';
import Checkbox from 'components/Checkbox';

const HairColor = () => {
  const [checkedItems, setCheckedItems] = useState(new Set());

  const checkedItemsHandler = (id: string, isChecked: boolean) => {
    if (isChecked) {
      checkedItems.add(id);
      setCheckedItems(checkedItems);
    } else if (!isChecked && checkedItems.has(id)) {
      checkedItems.delete(id);
      setCheckedItems(checkedItems);
    }
  };

  const [checked, setChecked] = useState(false);
  const checkHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(!checked);
    checkedItemsHandler(e.target.id, e.target.checked);
  };
  return (
    <div className="flex flex-wrap justify-center w-full">
      {contents[0].answers.map((answer) => (
        <Fragment key={answer.id}>
          <Checkbox
            id={answer.id}
            checked={checkedItems.has(answer.id)}
            img={answer.img}
            onChange={(e) => checkHandler(e)}
          />
        </Fragment>
      ))}
    </div>
  );
};
export default HairColor;
