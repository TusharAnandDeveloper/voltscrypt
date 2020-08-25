import React from "react";
import Homer from "views/Homer/Homer.js";
import Services from "views/Services/Services.js";
import Products from "views/Products/Products.js";
import Contact from "views/Contact/Contact.js";
function Root() {
  return (
    <>
      <div style={{overflowX:"hidden"}}>
        <Homer />
        <Services />
        <Products />
        <Contact />
      </div>
    </>
  );
}

export default Root;
