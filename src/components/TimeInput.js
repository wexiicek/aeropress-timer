import React, { useState, Fragment } from "react";

const TimeInput = ({ data, setData }) => {
  const initialState = {
    pourTime: "10",
    stirTime: "10",
    brewTime: "45",
  };

  const emptyState = {
    pourTime: "",
    stirTime: "",
    brewTime: "",
  };
  const [formState, setFormState] = useState(initialState);

  const [showError, setShowError] = useState(false);

  const handleChange = (e) => {
    if (e.target.validity.valid) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    } else {
      setShowError((showError) => "Please use only numbers.");
      setTimeout(() => {
        setShowError((showError) => false);
      }, 3000);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      formState.brewTime === "" ||
      formState.pourTime === "" ||
      formState.stirTime === ""
    ) {
      setShowError((showError) => "Please fill in all the fields.");
      setTimeout(() => {
        setShowError((showError) => false);
      }, 3000);
    } else {
      setData({ ...data, input: formState });
      setFormState(emptyState);
    }
  };

  const useSound = (e) => {
    //e.preventDefault();
    if (data.input.length === 0) {
      setData({ ...data, useSound: !data.useSound });
    }
  };

  const clear = (e) => {
    e.preventDefault();
    setFormState(emptyState);
  };

  return (
    <Fragment>
      {showError && <p id="error">{showError}</p>}
      <form>
        <label htmlFor="pourTime">Pour Time (seconds)</label>
        <input
          type="text"
          name="pourTime"
          id="pourTime"
          value={formState.pourTime}
          onChange={handleChange}
          disabled={data.input.length !== 0}
          maxLength="3"
          pattern="[0-9]*"
          autoComplete="off"
          autoCorrect="off"
        />
        <label htmlFor="stirTime">Stir Time (seconds)</label>
        <input
          type="text"
          name="stirTime"
          id="stirTime"
          value={formState.stirTime}
          disabled={data.input.length !== 0}
          onChange={handleChange}
          maxLength="3"
        />
        <label htmlFor="brewTime">Brew Time (seconds)</label>
        <input
          type="text"
          name="brewTime"
          id="brewTime"
          value={formState.brewTime}
          disabled={data.input.length !== 0}
          maxLength="3"
          onChange={handleChange}
        />
        <label htmlFor="useSound">
          Use Sound
          <input
            type="checkbox"
            name="useSound"
            id="useSound"
            checked={data.useSound}
            disabled={data.input.length !== 0}
            onChange={useSound}
          />
        </label>
        <button
          type="submit"
          onClick={handleSubmit}
          disabled={
            formState.brewTime === "" ||
            formState.pourTime === "" ||
            formState.stirTime === ""
          }
        >
          Start Timer
        </button>
        <button onClick={clear} disabled={data.input.length !== 0}>
          Clear
        </button>
      </form>
    </Fragment>
  );
};

export default TimeInput;
