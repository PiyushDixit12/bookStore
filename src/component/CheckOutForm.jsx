import React,{useState} from 'react';
import {Formik,Form,Field,ErrorMessage} from 'formik';
import * as Yup from 'yup';
import {Button,Modal} from 'react-bootstrap';

export const CheckOutForm = () => {
    const initialValues = {
        fullName: '',
        email: '',
        address: '',
        creditCard: '',
    };

    const validationSchema = Yup.object().shape({
        fullName: Yup.string().required('Please enter your full name'),
        email: Yup.string().email('Invalid email address').required('Email is required'),
        address: Yup.string().required('Please enter your shipping address'),
        creditCard: Yup.string()
            .matches(/^\d{4}-\d{4}-\d{4}-\d{4}$/,'Invalid credit card number')
            .required('Credit card number is required'),
    });

    const onSubmit = (values,{resetForm}) => {
        // Perform checkout actions here using the form values
        console.log('Form submitted with values:',values);

        alert("thanks for Checkout");
        // Reset the form after successful submission
        resetForm();
        handleClose();
    };
    const [show,setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div>


            <button onClick={handleShow} className=" btn btn-outline-primary " >Proceed to Checkout</button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Checkout form</Modal.Title>
                </Modal.Header>
                <Modal.Body>  <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={onSubmit}
                >
                    {({errors,touched}) => (
                        <Form>
                            <div>
                                <label htmlFor="fullName" className=" fs-5">Full Name:</label>
                                <Field type="text" name="fullName" className=" w-100 rounded-2 border border-dark border-1 p-1" />
                                <ErrorMessage name="fullName" component="div" className="error text-danger " />
                            </div>

                            <div>
                                <label htmlFor="email">Email:</label>
                                <Field type="email" name="email" className=" w-100 rounded-2 border border-dark border-1 p-1" />
                                <ErrorMessage name="email" component="div" className="error text-danger" />
                            </div>

                            <div>
                                <label htmlFor="address">Shipping Address:</label>
                                <Field as="textarea" name="address" className=" w-100 rounded-2 border border-dark border-1 p-1" />
                                <ErrorMessage name="address" component="div" className="error text-danger" />
                            </div>

                            <div>
                                <label htmlFor="creditCard">Credit Card Number:</label>
                                <Field type="text" name="creditCard" className=" w-100 rounded-2 border border-dark border-1 p-1" />
                                <ErrorMessage name="creditCard" component="div" className="error text-danger" />
                            </div>

                            <button type="submit" className="btn btn-outline-primary row  w-50 px-5 my-3 mx-5">Place Order</button>
                        </Form>
                    )}
                </Formik>
                </Modal.Body>

            </Modal>

        </div>
    );
};

// export default CheckOutForm;
