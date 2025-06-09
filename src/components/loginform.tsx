// components/LoginForm.tsx
'use client';

import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

interface FormValues {
  username: string;
  password: string;
}

const initialValues: FormValues = { username: '', password: '' };

const validationSchema = Yup.object({
  username: Yup.string().required('Required'),
  password: Yup.string().required('Required'),
});

export default function LoginForm() {
  const handleSubmit = (values: FormValues) => {
    console.log('Submitted:', values);
    // TODO: send to /api/auth/login or NextAuth signIn
  };

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
      {() => (
        <Form>
          <div className="mb-4">
            <label htmlFor="username" className="block mb-1 font-medium">Username</label>
            <Field name="username" type="text" className="w-full border px-3 py-2 rounded" />
            <ErrorMessage name="username" component="div" className="text-red-500 text-sm mt-1" />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block mb-1 font-medium">Password</label>
            <Field name="password" type="password" className="w-full border px-3 py-2 rounded" />
            <ErrorMessage name="password" component="div" className="text-red-500 text-sm mt-1" />
          </div>
          <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
            Log In
          </button>
        </Form>
      )}
    </Formik>
  );
}
