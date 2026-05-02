import React from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../store/reducers/authReducer';
import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-hot-toast';
import GoogleLoginComponent from '../components/Auth/GoogleLoginComponent';

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: Yup.object({
            email: Yup.string().email('Invalid email').required('Email is required'),
            password: Yup.string().required('Password is required'),
        }),
        onSubmit: async (values) => {
            const { email, password } = values;
            const resultAction = await dispatch(login({ email, password }));
            if (login.fulfilled.match(resultAction)) {
                toast.success('Login successful!');
                navigate('/'); // Redirect to home page after successful login
            } else {
                toast.error('Login failed: ' + resultAction.payload.message);
            }
        },
    });

    return (
        <main className="w-full max-w-md mx-auto p-6">
            <div className="mt-7 bg-white border border-gray-200 rounded-xl shadow-sm">
                <div className="p-4 sm:p-7">
                    <div className="text-center">
                        <h1 className="block text-2xl font-bold text-gray-800">Sign in</h1>
                        <p className="mt-2 text-sm text-gray-600">
                            Don't have an account yet?
                            <Link className="text-blue-600 decoration-2 hover:underline" to="/register">
                                Sign up here
                            </Link>
                        </p>
                    </div>
                    <form onSubmit={formik.handleSubmit}>
                        <div className="grid gap-y-4">
                            <div>
                                <label htmlFor="email" className="block text-sm mb-2">Email address</label>
                                <input
                                    type="email"
                                    id="email"
                                    {...formik.getFieldProps('email')}
                                    className={`py-3 px-4 block w-full border-gray-200 rounded-lg text-sm ${formik.touched.email && formik.errors.email ? 'border-red-500' : ''}`}
                                />
                                {formik.touched.email && formik.errors.email ? <div className="text-red-500">{formik.errors.email}</div> : null}
                            </div>
                            <div>
                                <label htmlFor="password" className="block text-sm mb-2">Password</label>
                                <input
                                    type="password"
                                    id="password"
                                    {...formik.getFieldProps('password')}
                                    className={`py-3 px-4 block w-full border-gray-200 rounded-lg text-sm ${formik.touched.password && formik.errors.password ? 'border-red-500' : ''}`}
                                />
                                {formik.touched.password && formik.errors.password ? <div className="text-red-500">{formik.errors.password}</div> : null}
                            </div>
                            <div className="flex items-center">
                                <input
                                    id="remember-me"
                                    name="remember-me"
                                    type="checkbox"
                                    className="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 focus:ring-blue-500"
                                />
                                <label htmlFor="remember-me" className="ms-3 text-sm">Remember me</label>
                            </div>
                            <button
                                type="submit"
                                className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-gray-900 text-white hover:bg-gray-800"
                            >
                                Sign in
                            </button>
                        </div>
                    </form>
                    {/* Google Login Component */}
                    <div className="mt-4">
                        <GoogleLoginComponent />
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Login;
