import React from "react";
  function ContactList({items}){
    return(

        <ul>
      <li key={items.id}>
          <p>{items}</p>
      </li>
        </ul>
        
       );
}
export default ContactList;