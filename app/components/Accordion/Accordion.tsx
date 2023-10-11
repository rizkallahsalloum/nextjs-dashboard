'use client';
import React from 'react';
import { Collapse } from 'react-collapse';

interface AccordionProps {
  title: string;
  children: React.ReactNode;
}

const Accordion: React.FC<AccordionProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion">
      <div className="accordion-header" onClick={handleToggle}>
        <span>{title}</span>
      </div>
      <Collapse isOpened={isOpen}>
        <div className="accordion-body">{children}</div>
      </Collapse>
    </div>
  );
};

export default Accordion;
