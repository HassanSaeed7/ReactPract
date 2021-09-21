import React from "react"

function ContactCard(props) {
    console.log(props)
    return (
        <div className="contact-card">
            <img src={props.contact.imgUrl}/>
            <h3>{props.contact.name}</h3>
            <p>Phone: {props.contact.phone}</p>
            <p>Email: <a href="{props.contact.email}">{props.contact.email}</a></p>
            <p>Fur Color: {props.contact.color}</p>
        </div>
    )
}

export default ContactCard