import { useEffect, useState } from 'react';

const useForm = (initialValues, validate) => {
  const [all, setAll] = useState([])
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      console.log('New User:', values);
      setAll((prevAll) => [...prevAll, values]);
      alert('user added')     
      resetForm(); 
    } 
    

  };

  const resetForm = () => {
    setValues(initialValues); 
  };

  useEffect(() => {
    console.log('All Users:', all);
  }, [all]);

  return {
    values,
    all,
    errors,
    handleChange,
    handleSubmit,
  };
};

export default useForm;
