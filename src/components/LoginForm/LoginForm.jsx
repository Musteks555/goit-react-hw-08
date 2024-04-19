import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";

import { login } from "../../redux/auth/operations";

import css from "./LoginForm.module.css";

const initialValues = {
    email: "",
    password: "",
};

const LoginSchema = Yup.object().shape({
    email: Yup.string().email("Must be a valid email!").required("Email is required!"),
    password: Yup.string().min(8, "Password must be at least 8 characters!").required("Password is required!"),
});

export const LoginForm = () => {
    const dispatch = useDispatch();

    const handleSubmit = (formData, formActions) => {
        dispatch(login(formData));
        formActions.resetForm();
    };

    return (
        <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={LoginSchema}>
            <Form className={css.form}>
                <span>Email</span>
                <Field type="email" name="email"></Field>
                <ErrorMessage name="email" component="span" className={css.contactError} />

                <span>Password</span>
                <Field type="password" name="password"></Field>
                <ErrorMessage name="password" component="span" className={css.contactError} />

                <button type="submit">Log In</button>
            </Form>
        </Formik>
    );
};

export default LoginForm;
