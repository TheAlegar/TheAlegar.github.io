import React, {useState} from 'react';
import "./Contact.css"

const Contact = () => {
    const [response, setResponse] = useState({});
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const onSubmit = (e) => {
        e.preventDefault();
        setResponse({name, email, message});
        console.log(response);
        setName("");
        setEmail("");
        setMessage("");
      };

    return (
        <div>
          <div className='contact'>
            <h4 className="label">Contact Us</h4>   
            <form className='form' id="contact-form" onSubmit={onSubmit}>
              <div className="form-group">
                <label>Name</label>
                <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} />
              </div>
              <div className="form-group">
                <label>Email address</label>
                <input type="email" className="form-control" aria-describedby="emailHelp" value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea className="form-control" rows="5" value={message} onChange={(e) => setMessage(e.target.value)} />
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
          </div>
      </div>
    )
}

export default Contact

