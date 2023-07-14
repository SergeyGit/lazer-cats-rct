import React, { useState, useRef, useEffect } from 'react';
import cn from 'classnames';
import styles from '../../styles/modules/select.module.scss';

const Select = ({ options, selected, onSelect, name, placeholder }) => {
  const selectRef = useRef(null);
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const handleSelectOption = (value) => () => {
    onSelect(value, name);
    handleClick();
  };

  const handleClickOutside = (event) => {
    if (selectRef.current && !selectRef.current.contains(event.target)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div
      className={cn(styles.select, {
        [styles.active]: open,
      })}
      ref={selectRef}
    >
      {selected ? (
        <div className={styles.value}>{selected}</div>
      ) : (
        <div className={styles.placeholder}>{placeholder}</div>
      )}
      <button
        className={cn(styles.selectDButton, {
          [styles.active]: open,
        })}
        type="button"
        onClick={handleClick}
      />
      {open && (
        <div className={styles.dialog}>
          <div className={styles.optionsWrap}>
            {options?.map((option) => (
              <div
                key={option}
                onClick={handleSelectOption(option)}
                className={cn(styles.option, {
                  [styles.selected]: option === selected,
                })}
              >
                <div>{option}</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Select;
