// Render Prop
import React from 'react';
import { Formik, Form, Field, ErrorMessage, useFormik } from 'formik';
import * as Yup from "yup";
import axios from 'axios';
import { motion } from "framer-motion";
import MaskedInput from "react-text-mask";
import useWindowDimensions from '@/components/hooks/useWindowDimensions'
import { AllContexts } from '@/components/context/Context'

import { useState, useEffect, useContext } from 'react';

import Button from './Button';
import { isSchema } from 'yup';



// const title = 'Зарегистрироваться на день открытых дверей'
const successMessage = 'Заявка успешно отправлена'


// const SignupSchema = Yup.object({
// 		  name: Yup.string()
// 		  .label('Full Name')
// 		  .required(),
//   mobilephone: Yup.number()
// 		  .min(11, 'Минимальное количество символов: 11.')
// 		  .required(),
// })

const phoneNumberMask = [
	"+", "7", " ",
	/[1-9]/,
	/\d/,
	/\d/,
	" ",
	/\d/,
	/\d/,
	/\d/,
	" ",
	/\d/,
	/\d/,
	" ",
	/\d/,
	/\d/
  ];


  const schema = Yup.object({
    name: Yup.string()
            .min(3, 'Минимальное количество символов: 3')
            .required('Обязательное поле'),
    mobilephone: Yup.string()
            .min(16, 'Введите номер полностью')
            .required('Обязательное поле')

  })





const FormС = (props) => {
	const [togglePopup, setTogglePopup] = useState(false)
	const [isSchemaValid, setIsSchemaValid] = useState(false)
	const [disableInput1, setDisableInput1] = useState(true)
	const [disableInput2, setDisableInput2] = useState(true)	
	const [submitDelay, setSumbitDelay] = useState(true)
	const [focused, setFocused] = useState(false)
	const [focused2, setFocused2] = useState(false)
	const onFocus = () => setFocused(true)
	const onFocus2 = () => setFocused2(true)
	const onBlur = () => setFocused(false)
	const onBlur2 = () => setFocused2(false)
	const [onBlurOnce1, setOnBlurOnce1] = useState(false)
	const [onBlurOnce2, setOnBlurOnce2] = useState(false)
	const [formData, setFormData] = useState()

    const [phonesData, setPhonesData] = useState({})

    const [width] = useWindowDimensions()


    const { title } = props

    // const {currentPage, currentComponent} = useContext(AllContexts) /// ???

	const formik = useFormik({
		initialValues: {
		  name: '',
		  mobilephone: '',
		},
		validationSchema: schema,
		onSubmit: function (values) {
			const TOKEN = `${process.env.TOKEN}`;
			const CHAT_ID = `${process.env.CHAT_ID}`;
			const URI_API = `https://api.telegram.org/bot${ TOKEN }/sendMessage`;
            const STRAPI_API = `${process.env.API_LINK}/api/form-requests`
			let message = `Новая заявка! \n\n<b>Имя:</b> ${values.name} \n<b>Телефон:</b> ${values.mobilephone}`;
            // \n<b>Ссылка:</b>${currentPage ? currentPage : 'Главная'} \n<b>Блок:</b> ${currentComponent}
			axios.post(URI_API,{
				chat_id: CHAT_ID,
				parse_mode: 'html',
				text: message
			})

            axios.post(STRAPI_API,{
				data: {
					name: values.name,
					phonenumber: values.mobilephone
				}
			})


		}
	  })

      useEffect(() => {
		const timer = setTimeout(() => {
			setDisableInput1(false)
			setDisableInput2(false)
		}, 1000);
		return () => clearTimeout(timer);
	}, [])


    const handleSchemaValue = (nameForm, numberForm) => {
	
        const obj = {
            name: nameForm,
            mobilephone: numberForm
        }
    
        setIsSchemaValid(schema.isValidSync(obj))
        }



	setTimeout(() => {
		submitDelay ? '' : setSumbitDelay(true)
	}, 3000);


    // const router = useRouter();
	// const redirectHandler = (c) => {
	// 	if (c === 'CreditStory1') { router.push('https://credistory.ru/rating') }
	// 	else if (c === 'CreditStory2') { router.push('https://nbki.ru/nbki-history/') }
	// 	else { null }
	// } 
    /// ???

    const submitBtnHandler = () => {
		// setRedirect(currentComponent)
		console.log('click')
		setTogglePopup(!togglePopup)
		// redirectHandler(currentComponent)
	}



	return (
		<div className="flex flex-col form my0 pyl container cd12">
          <div className="flex flex-col cd6 cm4 mls">
              <h2 className=''>{title}</h2>
          </div>
		  <form onSubmit={formik.handleSubmit} id="tg" className={'cd3 cm4' + (width > 800 ? " mls" : " ")}>
			<div className='input-field relative mb ov-visible mtm'>
				<div className='input-container w-full relative'>

                <input
                    disabled={disableInput1}
                    autoComplete="off"
                    type="text"
                    name="name"
                    id="name"
                    placeholder=" "
                    className='pxs'
                    onFocus={(e) => {
                        onFocus(e)
                        setDisableInput2(true)
                    }}
                    // onHover={() => {
                    // 	setDisableInput1(false)
                    // }}
                    onChange={(e) => {
                        formik.handleChange(e)
                        const timer = setTimeout(() => {
                            handleSchemaValue(e.target.value, formik.values.mobilephone)
                        }, 100);
                        return () => clearTimeout(timer);
                    }
                    }
                    onBlur={(e) => {
                        onBlur(e)
                        setDisableInput2(false)
                        setOnBlurOnce1(true)
                    }}
                    value={formik.values.name}
                />
                <label
                    // initial={{x: 0, opacity: 1}}
                    // animate={focused === false && formik.values.name === '' ? '' : animateInput}
                    className={(focused === false && formik.values.name === '' ? 'label pxs' : 'label animate pxs')}
                    htmlFor="name">
                    Имя
                </label>
                <br />
                {formik.errors.name && onBlurOnce1 === true ? (
                    <motion.div 
                        transition={{
                            duration: .2,
                            ease: 'easeInOut'
                        }}
                        initial={{opacity: 0, scale: 0.9}}
                        animate={{opacity: 1, scale: 1}}
                        className="error-container absolute flex items-center">
                        <span className='error-message'>{formik.errors.name}</span>
                    </motion.div>
                ) : ''}
				</div>
			</div>
            <div className='input-field relative mbm ov-visible mts'>
                <div className='input-container w-full relative'>

                    <MaskedInput
                        disabled={disableInput2}
                        guide={false}
                        autoComplete="off"
                        mask={phoneNumberMask}
                        type="tel"
                        name="mobilephone"
                        id="mobilephone"
                        placeholder=" "
                        className='mt pxs'
                        onFocus={(e) => {
                            onFocus2(e)
                            setDisableInput1(true)
                        }}
                        onChange={(e) => {
                            formik.handleChange(e)
                            const timer = setTimeout(() => {
                                handleSchemaValue(formik.values.name, e.target.value)
                            }, 100);
                            return () => clearTimeout(timer);
                        }
                        }
                        onBlur={(e) => {
                            onBlur2(e)
                            setDisableInput1(false)
                            setOnBlurOnce2(true)
                        }}
                        // onBlur={formik.handleBlur} 
                        value={formik.values.mobilephone.replace(/_/g, " ")}
                    />
                    <label 
                        className={(focused2 === false && formik.values.mobilephone === '' ? 'label2 mt pxs' : 'label2 mt animate pxs')}
                        htmlFor="phone">Телефон
                    </label>
                    <br /> 
                    {formik.errors.mobilephone && onBlurOnce2 === true ? (
                        <motion.div 
                            transition={{
                                duration: .2,
                                ease: 'easeInOut',
                                repeatType: 'mirror'
                            }}
                            initial={{opacity: 0, scale: 0.9}}
                            animate={{opacity: 1, scale: 1}}
                            exit={{ opacity: 0 }}
                            className="error-container absolute flex items-center">
                            <span className='error-message'>{formik.errors.mobilephone}</span>
                        </motion.div>
                    ) : ''}
                </div>
            </div>
            <div className='px0 justify-center'>
                <button 
                    disabled={submitDelay && isSchemaValid ? false : true}  
                    className={' form-button b-none o-none' + (isSchemaValid === true ? "" : "disabled") }
                    onClick={()=>submitBtnHandler()}
                    type='submit'
                >
                    <a className='py'>
                        Оставить заявку
                    </a>
                </button>
            </div>
            <motion.div
                className={"flex flex-col popup " + (togglePopup === true ? 'active' : '')}>
                <div className="popup-container flex flex-col">
                    {isSchemaValid ? <p className=''>{successMessage}</p> : <p className=''>{formData?.data.attributes.rejectionMessage}</p>}
                    <div className='ok-button-container flex justify-end'>
                        <a
                            className='ok-button'
                            onClick={() => setTogglePopup(!togglePopup)}
                        >OK</a>
                    </div>
                </div>
            </motion.div>
		  </form>
		</div>
	  );
}

export default FormС






















