import React, { FC } from 'react';
import styled from 'styled-components';

interface Props {
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  value: string;
  [x: string]: any;
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Input = styled.input`
  width: 100%;
  height: 100%;
  border: 1px solid #000;
`;

export const CustomInput: FC<Props> = ({ onChange, value, ...rest }) => {
  return (
    <Wrapper>
      <Input value={value} onChange={onChange} {...rest} />
    </Wrapper>
  );
};
