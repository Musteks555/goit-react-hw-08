import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";

import { register } from "../../redux/auth/operations";

import css from "./RegisterForm.module.css";

const initialValues = {
    name: "",
    email: "",
    password: "",
};

const RegisterSchema = Yup.object().shape({
    name: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required"),
    email: Yup.string().email("Must be a valid email!").required("Email is required!"),
    password: Yup.string().min(8, "Password must be at least 8 characters!").required("Password is required!"),
});

export const RegisterForm = () => {
    const dispatch = useDispatch();

    const handleSubmit = (formData, formActions) => {
        dispatch(register(formData));
        formActions.resetForm();
    };

    return (
        <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={RegisterSchema}>
            <Form className={css.form}>
                <label className={css.label}>
                    <span>Name</span>
                    <Field type="text" name="name"></Field>
                    <ErrorMessage name="name" component="span" className={css.contactError} />
                </label>

                <label className={css.label}>
                    <span>Email</span>
                    <Field type="email" name="email"></Field>
                    <ErrorMessage name="email" component="span" className={css.contactError} />
                </label>

                <label className={css.label}>
                    <span>Password</span>
                    <Field type="password" name="password"></Field>
                    <ErrorMessage name="password" component="span" className={css.contactError} />
                </label>

                <button type="submit">Register</button>
            </Form>
        </Formik>
    );
};

export default RegisterForm;
