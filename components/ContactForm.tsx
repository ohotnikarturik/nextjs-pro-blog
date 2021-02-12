import React, { useState } from 'react'
import { Formik } from 'formik'
import { object, string } from 'yup'

import Subtitle from './Subtitle'

const initialValues = {
  name: '',
  email: '',
  subject: '',
  message: '',
}

const FormContact = () => {
  const [formValue, setFormValue] = useState(initialValues)
  const [isFormSubmited, setIsFormSubmited] = useState(false)

  // validation of the shape
  const validationSchema = object().shape({
    name: string()
      .min(4, 'Name must be at least 4 characters!')
      .max(30, 'Name should not exceed 30 characters!')
      .required('Please, provide your name!')
      .matches(/^(.*)?\S+(.*)?$/, 'Field cannot be empty!'),
    email: string()
      .email('Email must be a valid!')
      .required('Please, provide your email!')
      .matches(/^(.*)?\S+(.*)?$/, 'Field cannot be empty!'),
    subject: string()
      .min(2, 'Subject should be at least 2 characters!')
      .max(30, 'Subject should not exceed 30 characters!')
      .required('Please, provide your subject!')
      .matches(/^(.*)?\S+(.*)?$/, 'Field cannot be empty!'),
    message: string()
      .min(2, 'Message should be at least 2 characters!')
      .max(200, 'Message should not exceed 200 characters!')
      .required('Please, provide your message!')
      .matches(/^(.*)?\S+(.*)?$/, 'Field cannot be empty!'),
  })

  // fix types
  const onSubmit = (values: any, submitProps: any) => {
    setFormValue({ ...values })
    setIsFormSubmited(true)
    submitProps.resetForm()
  }

  return (
    <>
      {isFormSubmited ? (
        <>
          <Subtitle label="Form Data" />
          <p>Name: {formValue.name}</p>
          <p>Email: {formValue.email}</p>
          <p>Subject: {formValue.subject}</p>
          <p>Massage: {formValue.message}</p>
          <button
            onClick={() => setIsFormSubmited(false)}
            className="btn"
            type="button"
          >
            Come back to form
          </button>
        </>
      ) : (
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({
            values,
            handleSubmit,
            errors,
            handleChange,
            handleBlur,
            touched,
            handleReset,
            dirty,
          }) => (
            <>
              <form
                onSubmit={handleSubmit}
                className="flex flex-col items-center h-full w-full"
              >
                <label className="flex flex-col justify-end mb-4 h-16 w-full sm:w-2/3 md:w-1/2 lg:w-2/5 xl:w-1/3">
                  <div className="flex w-full">
                    {errors.name && touched.name && (
                      <div className="text-sm text-primary-purple">
                        {errors.name}
                      </div>
                    )}
                  </div>
                  <input
                    aria-label="input-1"
                    className={
                      errors.name && touched.name
                        ? 'placeholder-primary-purple placeholder-opacity-50 font-semibold border-2 text-primary-purple border-primary-purple bg-white h-10 pl-4 pr-9 focus:border-primary-purple rounded-lg text-sm focus:outline-none w-full transition ease-in duration-200'
                        : 'placeholder-primary-red placeholder-opacity-50 font-semibold border-2 text-primary-crimson border-primary-red bg-white h-10 pl-4 pr-9 focus:border-primary-crimson rounded-lg text-sm focus:outline-none w-full transition ease-in duration-200'
                    }
                    type="text"
                    placeholder="Name..."
                    name="user_name"
                    value={values.name}
                    onChange={handleChange('name')}
                    onBlur={handleBlur('name')}
                  />
                </label>
                <label className="flex flex-col justify-end mb-4 h-16 w-full sm:w-2/3 md:w-1/2 lg:w-2/5 xl:w-1/3">
                  <div className="flex w-full">
                    {errors.email && touched.email && (
                      <div className="text-sm text-primary-purple">
                        {errors.email}
                      </div>
                    )}
                  </div>
                  <input
                    aria-label="input-2"
                    className={
                      errors.email && touched.email
                        ? 'placeholder-primary-purple placeholder-opacity-50 font-semibold border-2 text-primary-purple border-primary-purple bg-white h-10 pl-4 pr-9 focus:border-primary-purple rounded-lg text-sm focus:outline-none w-full transition ease-in duration-200'
                        : 'placeholder-primary-red placeholder-opacity-50 font-semibold border-2 text-primary-crimson border-primary-red bg-white h-10 pl-4 pr-9 focus:border-primary-crimson rounded-lg text-sm focus:outline-none w-full transition ease-in duration-200'
                    }
                    type="text"
                    placeholder="Email..."
                    name="email"
                    value={values.email}
                    onChange={handleChange('email')}
                    onBlur={handleBlur('email')}
                  />
                </label>
                <label className="flex flex-col justify-end mb-4 h-16 w-full sm:w-2/3 md:w-1/2 lg:w-2/5 xl:w-1/3">
                  <div className="flex w-full">
                    {errors.subject && touched.subject && (
                      <div className="text-sm text-primary-purple">
                        {errors.subject}
                      </div>
                    )}
                  </div>
                  <input
                    aria-label="input-3"
                    className={
                      errors.subject && touched.subject
                        ? 'placeholder-primary-purple placeholder-opacity-50 font-semibold border-2 text-primary-purple border-primary-purple bg-white h-10 pl-4 pr-9 focus:border-primary-purple rounded-lg text-sm focus:outline-none w-full transition ease-in duration-200'
                        : 'placeholder-primary-red placeholder-opacity-50 font-semibold border-2 text-primary-crimson border-primary-red bg-white h-10 pl-4 pr-9 focus:border-primary-crimson rounded-lg text-sm focus:outline-none w-full transition ease-in duration-200'
                    }
                    type="text"
                    placeholder="Subject..."
                    name="subject"
                    value={values.subject}
                    onChange={handleChange('subject')}
                    onBlur={handleBlur('subject')}
                  />
                </label>
                <label className="flex flex-col justify-end mb-4 h-52 w-full sm:w-2/3 md:w-1/2 lg:w-2/5 xl:w-1/3 ">
                  <div className="flex w-full">
                    {errors.message && touched.message && (
                      <div className="text-sm text-primary-purple">
                        {errors.message}
                      </div>
                    )}
                  </div>
                  <textarea
                    aria-label="textarea"
                    className={
                      errors.message && touched.message
                        ? 'placeholder-primary-purple placeholder-opacity-50 resize-none font-semibold border-2 text-primary-purple border-primary-purple bg-white h-44 pl-4 py-3 pr-9 focus:border-primary-purple rounded-lg text-sm focus:outline-none w-full transition ease-in duration-200'
                        : 'placeholder-primary-red placeholder-opacity-50 resize-none font-semibold border-2 text-primary-crimson border-primary-red bg-white h-44 pl-4 py-3 pr-9 focus:border-primary-crimson rounded-lg text-sm focus:outline-none w-full transition ease-in duration-200'
                    }
                    placeholder="Type message..."
                    name="message"
                    value={values.message}
                    onChange={handleChange('message')}
                    onBlur={handleBlur('message')}
                  />
                </label>
                <div className="w-full sm:w-2/3 md:w-1/2 lg:w-2/5 xl:w-1/3 flex justify-between">
                  <button
                    className={`focus:outline-none ${
                      !dirty &&
                      'opacity-50 cursor-not-allowed hover:bg-primary-silver'
                    } py-2 px-4 bg-primary-silver hover:bg-gray-200 transition ease-in duration-200 text-primary-red rounded-md shadow-md font-medium`}
                    onClick={handleReset}
                    type="reset"
                  >
                    Reset
                  </button>
                  <button
                    className="focus:outline-none py-2 px-4 bg-primary-red hover:bg-primary-crimson transition ease-in duration-200 text-primary-white rounded-md shadow-md font-medium"
                    type="submit"
                  >
                    Send
                  </button>
                </div>
              </form>
            </>
          )}
        </Formik>
      )}
    </>
  )
}

export default FormContact
