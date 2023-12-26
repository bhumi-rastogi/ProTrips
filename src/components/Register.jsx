import React, { useState } from 'react';
import Header from './Header'


const Submit = () => {
  const [data, setData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    contacts: '',
  });

  const [Submit, setSubmit] = useState(false);
  const [err, setErr] = useState({});

  const change = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const save = (e) => {
    e.preventDefault();

    const Err = {};
    for (const i in data) {
      if (!data[i]) {
        Err[i] = `Please enter your ${i}!`;
      }
    }
    if (Object.keys(Err).length > 0) {
      setErr(Err);
    } else {
      setSubmit(true);
    }
  };

  return (
    <>
    <Header/>
    <div className="box">
      {Submit && (
        <p className="save">Registration successful!</p>
      )}
      <form onSubmit={save}>
        <h1>Form</h1>
        {Object.keys(data).map((i) => (
          <label key={i}>
            {i.charAt(0).toUpperCase() + i.slice(1)}:
            {i === 'contacts' ? (
              <div><input name={i} value={data[i]} onChange={change} /></div>
            ) : (
              <div><input type={i === 'email' ? 'email' : 'text'} name={i} value={data[i]} onChange={change} /></div>
            )}
            {err[i] && <p className="error">{err[i]}</p>}
          </label>
        ))}
        <button type="submission">Submit</button>
      </form>
    </div>
    </>
  );
};

export default Submit;