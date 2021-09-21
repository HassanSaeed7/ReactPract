import React from "react";
import Nav from "./Nav";
import Header from "./Header";
import Summary from "./Summary";
import FormField from "./FormField";
import Button from "./Button";
import ContactCard from "./ContactCard";

function App() {
  return (
    <div className="container">
      <Nav />
      <Header />
      <Summary />
      <ContactCard />
      <FormField />
      <Button />
      <ContactCard
        contact={{
          name: "Test",
          imgUrl: "http://placekitten.com/400/200",
          phone: "(555) 555-5555",
          email: "email@me.com",
          color: "white"
        }}
      />
      <FormTwo />
      <FormTwoButton />
      <Footer />

      <ContactCard
        contact={{
          name: "Destroyer",
          imgUrl: "http://placekitten.com/400/300",
          phone: "(212) 555-3456",
          email: "ofworlds@yahoo.com",
          color: "orange"
        }}
      />

      <ContactCard
        contact={{
          name: "Felix",
          imgUrl: "http://placekitten.com/200/100",
          phone: "(212) 555-4567",
          email: "thecat@hotmail.com",
          color: "grey"
        }}
      />
    </div>
  );
}

export default App;
