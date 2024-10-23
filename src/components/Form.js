import { Box, TextField, Button, Typography, InputAdornment } from "@mui/material";
import styles from './form.module.css';
import useForm from "../customHook/useForm";
import validateForm from "../Utils/validate";
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';

const Form = () => {
  
  const initialValues = { name: "", email: "", password: "" };
  const { values, errors, handleChange, handleSubmit } = useForm(initialValues, validateForm);

  return (
    <div className={styles.main}>
      <Box
        component="form"
        onSubmit={handleSubmit}
        noValidate
        sx={{ maxWidth: 400, padding: 4, backgroundColor: '#fff', borderRadius: 2, boxShadow: 4 }}
      >
        <Typography variant="h5" component="h1" align="center" gutterBottom>
          <b>User Registration</b>
        </Typography>

        <TextField
          fullWidth
          margin="normal"
          label="Name"
          name="name"
          value={values.name}
          onChange={handleChange}
          error={Boolean(errors.name)}
          helperText={errors.name}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <PersonIcon />
              </InputAdornment>
            ),
          }}
        />

        <TextField
          fullWidth
          margin="normal"
          label="Email"
          name="email"
          type="email"
          value={values.email}
          onChange={handleChange}
          error={Boolean(errors.email)}
          helperText={errors.email}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <EmailIcon />
              </InputAdornment>
            ),
          }}
        />

        <TextField
          fullWidth
          margin="normal"
          label="Password"
          name="password"
          type="password"
          value={values.password}
          onChange={handleChange}
          error={Boolean(errors.password)}
          helperText={errors.password}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LockIcon />
              </InputAdornment>
            ),
          }}
        />

        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 2 }}
        >
          Register
        </Button>
      </Box>
    </div>
  );
};

export default Form;
