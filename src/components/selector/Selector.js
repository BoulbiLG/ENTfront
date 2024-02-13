import React, { useState, useEffect } from 'react';

const Selector = (props) => {
  const [selectedValue, setSelectedValue] = useState(props.defaultOption);
  const [isFilled, setIsFilled] = useState(false);

  useEffect(() => {
    setSelectedValue('');
    setIsFilled(false);
  }, []);

  useEffect(() => {
    if (props.value !== selectedValue) {
      setSelectedValue(props.value);
    }
  }, [props.value, selectedValue]);

  const selectorValeurChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedValue(selectedValue);
    setIsFilled(true);
    if (props.onChange) {
      props.onChange(selectedValue);
    }
  };

  const { options, required, optionDefaut } = props;

  return (
    <div>
      <select value={selectedValue} onChange={(e) => selectorValeurChange(e)}>
        {optionDefaut === undefined ? (
          <option value="" disabled={!required}>{props.titreSelecteur}</option>
        ) : null}
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {required && !isFilled && <p style={{ color: 'red' }}>Ce champ est obligatoire</p>}
    </div>
  );
};

export default Selector;
