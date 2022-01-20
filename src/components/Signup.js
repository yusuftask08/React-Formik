import { useFormik } from 'formik';
import validationSchema from './valid';
function Signup() {
    const { handleChange, handleSubmit, values } = useFormik({
        initialValues: {
            email: '',
            password: '',
            passwordConfirm: '',
        },
        onSubmit: values => {
            console.log(JSON.stringify(values, null, 2));
        },
        validationSchema,
    });
    return (
        <div className="App">
            <header className="App-header">
                <h1>Sign Up</h1>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="email">Email</label>
                    <input name="email" value={values.email} onChange={handleChange} />
                    <br />
                    <br />
                    <label htmlFor="password">Password</label>
                    <input name="password" value={values.password} onChange={handleChange} />
                    <br />
                    <br />
                    <label htmlFor="passwordConfirm">Confirm Password </label>
                    <input name="passwordConfirm" value={values.passwordConfirm} onChange={handleChange} />
                    <br />
                    <br />
                    <button type="submit">Submit</button>
                    <br /><br />
                    <code>{JSON.stringify(values)}</code>
                </form>
            </header>
        </div>
    );
}

export default Signup;
