import { Formik } from 'formik';
import React from 'react';

interface FormPayload {
  [key: string]: string;
}

interface Props
  extends Omit<
    React.ComponentProps<typeof Formik>,
    'initialValues' | 'onSubmit'
  > {
  initialValues: FormPayload;
  onSubmit: (values: FormPayload) => Promise<any>;
}

const FormComponent: React.ForwardRefRenderFunction<any, Props> = (
  props,
  ref,
) => {
  return (
    <Formik
      innerRef={ref}
      {...props}
      validateOnBlur={true}
      validateOnChange={true}
    />
  );
};

export const Form = React.forwardRef(FormComponent);
