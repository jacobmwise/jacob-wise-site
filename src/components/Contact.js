import React from 'react';

import emailjs from 'emailjs-com';

import Nav from './subcomponents/Nav';
import Footer from './subcomponents/Footer';

class Contact extends React.Component {
    state = {
        message: '',
        messageClass: ''
    };

    sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('gmail', 'template_e1QUFN4M', '#contact', 'user_RcZaet1ysb5AuBBEi1tz3')
            .then((result) => {
                console.log(result.text);
                this.setState({message: "Your message has been sent. You can expect a response within a few days.", messageClass: "text-center alert alert-success"});
            }, (error) => {
                console.log(error.text);
                this.setState({message: "There was an error during message sending. Please try again.", messageClass: "alert alert-danger"});
        });

        e.target.from_name.value = '';
        e.target.from_email.value = '';
        e.target.message_html.value = '';
    };
  
    render() {
        return (
            <div>
                <Nav />

                <div className="text-center">
                    <h1 className="mt-5">Contact Form</h1>
                    <p>Contact me here with project suggestions, feedback, and any other inquiries.</p>
                </div>

                <form className="contact-form mx-auto mt-5 col-12 col-md-8" id="contact" onSubmit={this.sendEmail} style={{height: '80vh'}}>
                    <input type="hidden" name="to_name" value="Jacob" />
                    <div className="form-group">
                        <label>Name</label>
                        <input className="form-control" type="text" name="from_name" required />
                    </div>
                    
                    <div className="form-group">
                        <label>Email</label>
                        <input className="form-control" type="email" name="from_email" required />
                    </div>
                    
                    <div className="form-group">
                        <label>Message</label>
                        <textarea className="form-control" name="message_html" required />
                    </div>

                    <div className={this.state.messageClass}>
                        {this.state.message}
                    </div>
                    
                    <input type="submit" value="Send" className="btn btn-info float-right" />
                </form>

                <Footer />
            </div>
        );
    }
}

export default Contact;