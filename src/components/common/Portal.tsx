import { device } from '@/styles';
import { useRef, useEffect, useState, ReactNode } from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';

interface OverlayProps {
  children: ReactNode;
}

const Overlay = styled.div`
  display: flex;
  position: fixed;
  justify-content: flex-end;
  align-items: flex-end;
  padding: 0.7rem;
  right: 0;
  bottom: 0;
  width: 60px;
  height: 60px;
  overflow: auto;
  z-index: 2;
  @media ${device.tablet} {
    display: none;
  }
`;

export const Portal = (props: OverlayProps) => {
  const ref = useRef<Element | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    ref.current = document.querySelector<HTMLElement>('#portal');
    setMounted(true);
  }, []);

  return mounted && ref.current
    ? createPortal(<Overlay>{props.children}</Overlay>, ref.current)
    : null;
};
