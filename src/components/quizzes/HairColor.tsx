import React, { Fragment, useState } from 'react';
import contents from '../../pages/contents/questions';
import Checkbox from 'components/Checkbox';
import Button from 'components/Button';
import { FunnelProp } from 'pages/QuizFunnel';

const HairColor = ({ onNext }: FunnelProp) => {
  const [checkedItems, setCheckedItems] = useState(new Set<string>());

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

  const getCheckedValues = () => {
    return Array.from(checkedItems).toString();
  };

  const isDisabled = () => {
    if (checkedItems.size === 0) return true;
    return checkedItems.size > 1 && !checkedItems.has('white');
  };

  return (
    <>
      <div className="text-2xl mx-2 mt-16 text-center">
        {contents[0].content}
        <p className="text-base">흰색을 포함한 경우 중복선택이 가능합니다.</p>
      </div>
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
      <div className="flex absolute w-full max-w-sm bottom-0">
        <Button
          onClick={(e) => {
            onNext(e, getCheckedValues());
          }}
          disabled={isDisabled()}
        >
          완료
        </Button>
      </div>
    </>
  );
};
export default HairColor;
