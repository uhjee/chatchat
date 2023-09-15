import { ChangeEventHandler, Dispatch, SetStateAction, useCallback, useState } from 'react';

type ReturnTypes<T = any> = [T, ChangeEventHandler<HTMLInputElement>, Dispatch<SetStateAction<T>>];

const useInput = <T = any>(initailValue: T): ReturnTypes<T> => {
  const [value, setValue] = useState(initailValue);

  const onChangeHandler: ChangeEventHandler<HTMLInputElement> = useCallback((e) => {
    e.preventDefault();
    setValue(e.currentTarget.value as unknown as T);
  }, []);
  return [value, onChangeHandler, setValue];
};

export default useInput;
