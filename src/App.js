import './App.css';
import { useFormik } from 'formik';

function App() {
  const { handleChange, handleSubmit, values } = useFormik({
    initialValues: {
      firstName: 'yusuf',
      lastName: 'taskiran',
      email: 'yusuftask@gmail.com',
      gender: 'female',
      Hobies: [],
      country: []
    },
    onSubmit: values => {
      console.log(JSON.stringify(values, null, 2));
    },
  });
  return (
    <div className="App">
      <header className="App-header">
        <h1>Sign Up</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="firstName">First Name</label>
          <input name="firstName" value={values.firstName} onChange={handleChange} />
          <br />
          <br />
          <label htmlFor="lastName">Last Name</label>
          <input name="lastName" value={values.lastName} onChange={handleChange} />
          <br />
          <br />
          <label htmlFor="email">Email</label>
          <input
            name="email"
            type="email" onChange={handleChange}
            value={values.email}
          />
          <br /><br />
          <div>
            <input type="checkbox" name="Hobies" value="Football" onChange={handleChange} />
            Football
          </div>
          <div>
            <input type="checkbox" name="Hobies" value="Cinema" onChange={handleChange} />
            Cinema
          </div>
          <div>
            <input type="checkbox" name="Hobies" value="Game" onChange={handleChange} />
            Game
          </div>
          <br />

          <select value={values.country} name='country' onChange={handleChange}>
            <option value="turkey">Turkey</option>
            <option value="en">England</option>
            <option value="us">Amerika</option>
          </select>
          <br />

          <span>Male</span>
          <input type="radio" checked={values.gender === 'male'} name='gender' value='male' onChange={handleChange} />

          <span>Female</span>
          <input type="radio" checked={values.gender === 'female'} name='gender' value='female' onChange={handleChange} />

          <br /><br />
          <button type="submit">Submit</button>
          <br /><br />
          <code>{JSON.stringify(values)}</code>
        </form>
      </header>
    </div>
  );
}

export default App;
