export default function validateForm(values) {
  let errors = {};

  const emailRegEx = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(values.email)
  const passwordRegEx =  !/.{8,}/.test(values.password) || 
  !/\d/.test(values.password) || 
  !/[A-Z]/.test(values.password) || 
  !/[@$!%*?^&#]/.test(values.password) 

  if (!values.name) {
    errors.name = "Name is required";
  }

  if (!values.email) {
    errors.email = "Email is required";
  } else if (!emailRegEx) {
    errors.email = "Email address is invalid";
  }

  if (!values.password) {
    errors.password = "Password is required";
  } else if ( passwordRegEx ) {
    errors.password = "Password must contain at least 8 characters, 1 special character, 1 number, and 1 uppercase letter";
  }

  return errors;
}
