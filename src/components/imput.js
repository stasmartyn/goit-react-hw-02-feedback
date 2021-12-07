import React from "react";

function Input({onContacts,onName}){

    return(

      <form action="">
  <input
  type="text"
  name="name"
  id='inputid'
  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
  required
  onChange={onName}
/>
<button type="submit"> SUBMIT FORM</button>
 </form>

    )
}
export default Input;