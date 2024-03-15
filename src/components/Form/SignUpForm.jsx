//src\components\Form\SignUpForm.jsx

import React from 'react';

function SignUpForm() {
  const handleUploadButtonClick = () => {
    const fileInput = document.getElementById('uploadInput');
    if (fileInput) {
      fileInput.click();
    }
  };

  return (
    <section className='SignUpForm'>
      <h1>Working with POST request</h1>
      <div className='contact-form'>
        <form
          action="#"
          className="form"
          method="POST"
          encType="multipart/form-data"
        >
           <label className="form-label">
         <input
        type="text"
        name="name"
        className="form-input input-name"
        placeholder="Your name"
        required
      />
    </label>

    <label className="form-label">
           <input
        type="email"
        name="email"
        className="form-input input-email"
        placeholder="Email"
        required
      />
    </label>

    <label className="form-label">
         <input
        type="tel"
        name="phone"
        className="form-input input-phone"
        placeholder="Phone"
        pattern="\+38\(\d{3}\)\d{3}-\d{2}-\d{2}"
        required
      />
    </label>

    <fieldset className="form-radio-group">
      <legend >Select your position</legend>
      <label>
        <input type="radio" name="position" value="frontend" required />
        Frontend developer
      </label>
      <label>
        <input type="radio" name="position" value="backend" />
        Backend developer
      </label>
      <label>
        <input type="radio" name="position" value="designer" />
        Designer
      </label>
      <label>
        <input type="radio" name="position" value="qa" />
        QA
      </label>
    </fieldset>
   
          <label className="form-label-order">
            <div className="upload-block">
              <button
                className="btn-upload-order upload-button"
                type='button'
                onClick={handleUploadButtonClick} 
              >
                Upload
              </button>
              <p id="placeholder">Upload your file</p>
              <input
                type="file"
                name="file[]"
                id="uploadInput"
             
                accept=".jpg, .png, .gif"
                className="form-input form-input-order  "
              />
            </div>
          </label>
          <button className="signup-btn disabled" type="submit">
            Sign up
          </button>
        </form>
      </div>
    </section>
  );
}

export default SignUpForm;
