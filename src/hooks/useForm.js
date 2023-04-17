const { useState } = require("react");

export function userForm(initialValues){
  const [values, setValues] = useState(initialValues);

  function setValue(key, value){
    setValues((prevState) => {
      return {...prevState,
      [key]: value}
    })
  }

  function handleChange(e){
    setValue(e.target.getAttribute('name'), e.target.value);
  }

  function clearForm(){
    setValues(initialValues);
  }

  return {
    handleChange,
    values,
    clearForm
  }
}