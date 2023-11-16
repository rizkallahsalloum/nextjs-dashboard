'use client';
import React, { useState, useRef, useEffect } from 'react';

import styles from './DropdownModal.module.scss';
import Link from 'next/link';

interface Props {
  trigger: React.ReactNode;
  children: React.ReactNode;
  onClick?: () => void;
}

const DropdownModal = ({ title, children, trigger }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement | null>(null);
  const triggerRef = useRef<HTMLDivElement | null>(null);
  const cx = (...classNames: string[]) => classNames.join(' ');

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      isOpen &&
      modalRef.current &&
      !modalRef.current.contains(event.target as Node) &&
      triggerRef.current &&
      !triggerRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  return (
    <>
      <div
        className={styles.btn__dropdown}
        aria-labelledby="dropdown-toggle"
        onClick={handleToggle}
        ref={triggerRef} // Set the triggerRef on the trigger element
      >
        {trigger}
      </div>
      <div
        id="dropdown-content"
        className={cx(
          styles.dropdown_modal,
          isOpen ? styles.dropdown_modal_open : ''
        )}
        ref={modalRef}
        aria-hidden={!isOpen}
      >
        <div className={styles.dropdown_modal_content}>
          <div className={styles.dropdown_modal_content_text}>{children}</div>
        </div>
      </div>
    </>
  );
};

export default DropdownModal;
