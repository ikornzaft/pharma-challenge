import React, { FC, useId } from 'react';
import styled from 'styled-components';

interface Props {
  onChange: React.ChangeEventHandler<HTMLSelectElement>;
  value: string;
  label: string;
  children: React.ReactNode;
  [x: string]: any;
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  width: 70%;
`;

const SelectField = styled.select`
  width: 100%;
  height: 100%;
  border: 1px solid var(--color-gray);
  border-radius: 8px;
  padding: 0.5rem 1rem;
  &:focus {
    outline-color: var(--color-salmon-light);
  }
`;

const Label = styled.label`
  font-size: 0.8rem;
  font-weight: 500;
  margin-bottom: 0.2rem;
  color: var(--color-gray);
`;

export const Select: FC<Props> = ({
  onChange,
  value,
  label,
  children,
  ...rest
}) => {
  const selectId = useId();
  return (
    <Wrapper>
      <Label htmlFor={selectId}>{label}</Label>
      <SelectField id={selectId} value={value} onChange={onChange} {...rest}>
        {children}
      </SelectField>
    </Wrapper>
  );
};
