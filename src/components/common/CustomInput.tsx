import { device } from '@/styles';
import React, { FC, useId } from 'react';
import styled from 'styled-components';

interface Props {
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  value: string;
  label: string;
  [x: string]: any;
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  width: 70%;
`;

const Input = styled.input`
  width: 100%;
  height: 100%;
  border: 1px solid var(--color-gray);
  border-radius: 8px;
  padding: 0.5rem 1rem;
  font-size: 0.8rem;
  @media ${device.tablet} {
    font-size: 1rem;
  }
  &:focus {
    outline-color: var(--color-salmon-light);
  }
`;

const Label = styled.label`
  font-size: 0.7rem;
  font-weight: 500;
  margin-bottom: 0.2rem;
  color: var(--color-gray);
  @media ${device.tablet} {
    font-size: 0.8rem;
  }
`;

export const CustomInput: FC<Props> = ({ onChange, value, label, ...rest }) => {
  const inputId = useId();
  return (
    <Wrapper>
      {label !== '' && <Label htmlFor={inputId}>{label}</Label>}
      <Input id={inputId} value={value} onChange={onChange} {...rest} />
    </Wrapper>
  );
};
