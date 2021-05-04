import * as yup from 'yup';

export const authenticationSchema = yup.object().shape({
  emailAddress: yup
    .string()
    .trim()
    .required('required')
    .matches(/^.+@.+\..+$/g, 'email address is invalid'),
  password: yup.string().trim().required('required'),
});
