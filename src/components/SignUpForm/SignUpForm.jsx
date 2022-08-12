import React, { useState } from 'react';

const defaultFormFields = {
   displayName: '',
   email: '',
   password: '',
   confirmPassword: ''
}

const SignUpForm = () => {

   const [formFields, setFormFields] = useState(defaultFormFields)
   const { displayName, email, password, confirmPassword } = formFields

   const handleChange = (e) => {
      const { value, name } = e.target;
      setFormFields({ ...formFields, [name]: value })
   }

   const submitHandler = (e) => {
      e.preventDefault()
   }

   return (
      <div className="text-2xl max-w-md w-full mb-4">
         <h1 className="mb-4"> Register for new ACCOUNT</h1>
         <form method="POST" onSubmit={submitHandler} className="flex flex-col gap-2 ">
            <label>Display Name</label>
            <input type="text" required className="border border-black p-2 max-w-xs w-full" onChange={handleChange}
               name="displayName" value={displayName} />
            <label>Email</label>
            <input type="email" required className="border border-black p-2 max-w-xs w-full" onChange={handleChange}
               name="email" value={email} />
            <label>Password</label>
            <input type="password" required className="border border-black p-2 max-w-xs w-full" onChange={handleChange}
               name={"password"} value={password} />
            <label>Confirm Password</label>
            <input type="password" required className="border border-black p-2 max-w-xs w-full" onChange={handleChange}
               name={"confirmPassword"} value={confirmPassword} />
            <button type={"submit"}
               className="border border-black py-2 text-2xl max-w-xs w-full hover:bg-black hover:text-white ">Sign up
            </button>
         </form>
      </div>
   );
};

export default SignUpForm;