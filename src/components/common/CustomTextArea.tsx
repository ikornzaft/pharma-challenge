import React, { FC, useId } from 'react';
import styled from 'styled-components';

interface Props {
  onChange: React.ChangeEventHandler<HTMLTextAreaElement>;
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

const TextArea = styled.textarea`
  width: 100%;
  height: 120px;
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

export const CustomTextArea: FC<Props> = ({
  onChange,
  value,
  label,
  ...rest
}) => {
  const textAreaId = useId();
  return (
    <Wrapper>
      <Label htmlFor={textAreaId}>{label}</Label>
      <TextArea id={textAreaId} value={value} onChange={onChange} {...rest} />
    </Wrapper>
  );
};
