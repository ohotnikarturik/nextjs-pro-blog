import React, { useState } from 'react'
import { Formik } from 'formik'
import { object, string } from 'yup'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faEnvelope,
  faCheckCircle,
  faTimesCircle,
} from '@fortawesome/free-solid-svg-icons'

import fire from '../firebase-config'
import Subtitle from './Subtitle'
import Loader from './Loader'

const formInitValues = {
  name: '',
  email: '',
  subject: '',
  message: '',
}

const FormContact = () => {
  const [isSentImage, setIsSentImage] = useState(false)
  const [isLoader, setIsLoader] = useState(false)
  const [isError, setIsError] = useState(false)
  const [senderName, setSenderName] = useState('')

  // validation of the shape
  const validationSchema = object().shape({
    name: string()
      .min(2, 'Name must be at least 2 characters!')
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

  const showSentEmail = (senderName: string) => {
    setIsSentImage(true)
    setSenderName(senderName)
    setTimeout(() => {
      setIsSentImage(false)
      setSenderName('')
    }, 5000)
  }

  const showErrorSentEmail = (senderName: string) => {
    setIsLoader(false)
    setIsError(true)
    setSenderName(senderName)
    setTimeout(() => {
      setIsError(false)
      setSenderName('')
    }, 5000)
  }

  // fix types
  const onSubmitForm = async (values: any, submitProps: any) => {
    try {
      setIsLoader(true)
      await fire.collection('contacts').add({ ...values })
      setIsLoader(false)
      showSentEmail(values.name)
      submitProps.resetForm()
    } catch (error) {
      setIsLoader(false)
      showErrorSentEmail(values.name)
    }
  }

  if (isLoader) {
    return (
      <div className="flex items-center justify-center h-full w-full">
        <Loader label="Sending..." />
      </div>
    )
  }

  if (isSentImage || isError) {
    return (
      <div className="flex flex-col items-center justify-center h-full w-full">
        {isSentImage ? (
          <div className="flex flex-col items-center">
            <Subtitle
              boldStyle
              label={`Thank you ${senderName}. Your message was send!`}
              color="blue"
            />
            <div className="inline-block mt-3 text-primary-blue">
              <FontAwesomeIcon width={50} icon={faCheckCircle} />
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center">
            <Subtitle
              boldStyle
              label={`Sorry ${senderName}, something went wrong, try again!`}
              color="purple"
            />
            <div className="inline-block mt-3 text-primary-purple">
              <FontAwesomeIcon width={50} icon={faTimesCircle} />
            </div>
          </div>
        )}
      </div>
    )
  }

  return (
    <Formik
      initialValues={formInitValues}
      validationSchema={validationSchema}
      onSubmit={onSubmitForm}
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
            <div className="w-full sm:w-2/3 md:w-1/2 lg:w-2/5 xl:w-1/3 flex justify-between items-center">
              <Subtitle
                color="gray"
                boldStyle
                label="Send message please . . ."
              />
              <div className="inline-block mr-auto ml-3 text-primary-gray transform -rotate-12">
                <FontAwesomeIcon width={20} icon={faEnvelope} />
              </div>
            </div>
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
                    ? 'placeholder-primary-purple focus:shadow-xl placeholder-opacity-50 font-semibold border-2 text-primary-purple border-primary-purple bg-white h-10 pl-4 pr-9 focus:border-primary-purple rounded-lg text-sm focus:outline-none w-full transition ease-in duration-200'
                    : 'placeholder-primary-red focus:shadow-xl placeholder-opacity-50 font-semibold border-2 text-primary-crimson border-primary-red bg-white h-10 pl-4 pr-9 focus:border-primary-crimson rounded-lg text-sm focus:outline-none w-full transition ease-in duration-200'
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
                    ? 'placeholder-primary-purple focus:shadow-xl placeholder-opacity-50 font-semibold border-2 text-primary-purple border-primary-purple bg-white h-10 pl-4 pr-9 focus:border-primary-purple rounded-lg text-sm focus:outline-none w-full transition ease-in duration-200'
                    : 'placeholder-primary-red focus:shadow-xl placeholder-opacity-50 font-semibold border-2 text-primary-crimson border-primary-red bg-white h-10 pl-4 pr-9 focus:border-primary-crimson rounded-lg text-sm focus:outline-none w-full transition ease-in duration-200'
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
                    ? 'placeholder-primary-purple focus:shadow-xl placeholder-opacity-50 font-semibold border-2 text-primary-purple border-primary-purple bg-white h-10 pl-4 pr-9 focus:border-primary-purple rounded-lg text-sm focus:outline-none w-full transition ease-in duration-200'
                    : 'placeholder-primary-red focus:shadow-xl placeholder-opacity-50 font-semibold border-2 text-primary-crimson border-primary-red bg-white h-10 pl-4 pr-9 focus:border-primary-crimson rounded-lg text-sm focus:outline-none w-full transition ease-in duration-200'
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
                    ? 'placeholder-primary-purple focus:shadow-xl placeholder-opacity-50 resize-none font-semibold border-2 text-primary-purple border-primary-purple bg-white h-44 pl-4 py-3 pr-9 focus:border-primary-purple rounded-lg text-sm focus:outline-none w-full transition ease-in duration-200'
                    : 'placeholder-primary-red focus:shadow-xl placeholder-opacity-50 resize-none font-semibold border-2 text-primary-crimson border-primary-red bg-white h-44 pl-4 py-3 pr-9 focus:border-primary-crimson rounded-lg text-sm focus:outline-none w-full transition ease-in duration-200'
                }
                placeholder="Type message..."
                name="message"
                value={values.message}
                onChange={handleChange('message')}
                onBlur={handleBlur('message')}
              />
            </label>
            <div className="w-full sm:w-2/3 md:w-1/2 lg:w-2/5 xl:w-1/3 flex justify-between mt-5">
              <button
                className={`transform hover:scale-105 motion-reduce:transform-none focus:outline-none ${
                  !dirty &&
                  'opacity-50 cursor-not-allowed hover:bg-primary-gray'
                } py-2 px-4 bg-primary-gray hover:bg-primary-gray transition ease-in duration-200 text-primary-white rounded-md shadow-md font-medium`}
                onClick={handleReset}
                type="reset"
              >
                Reset
              </button>
              <button
                className="transform hover:scale-105 motion-reduce:transform-none focus:outline-none py-2 px-4 bg-primary-red hover:bg-primary-crimson transition ease-in duration-200 text-primary-white rounded-md shadow-md font-medium"
                type="submit"
              >
                Send
              </button>
            </div>
          </form>
        </>
      )}
    </Formik>
  )
}

export default FormContact
