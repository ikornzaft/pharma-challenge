import React, { FC } from 'react';
import styled from 'styled-components';

interface Props {
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  checked: boolean;
  value: string;
  [x: string]: any;
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const InputCheckbox = styled.input`
  width: 100%;
  height: 100%;
  border: 1px solid #000;
`;

export const Checkbox: FC<Props> = ({ onChange, checked, value }) => {
  return (
    <Wrapper>
      <InputCheckbox
        type="checkbox"
        id={value}
        value={value}
        onChange={onChange}
        checked={checked}
      />
    </Wrapper>
  );
};
