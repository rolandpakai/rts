import React from 'react';

interface ChildProps {
  color: string;
  onClick: () => void;
  children: React.ReactNode
}

const Child = ({ color, onClick, children }: ChildProps) => {
  return (
    <>
      <div>Child</div>
      <div>{color}</div>
      <div>{children}</div>
      <button onClick={onClick}>Click me</button>
    </>
  )
};

export const ChildAsFC: React.FC<ChildProps> = ({ color, onClick, children }) => {
  return (
    <>
        <div>ChildAsFC</div>
        <div>{color}</div>
        <div>{children}</div>
        <button onClick={onClick}>Click me</button>
    </>
  )
}

export default Child;