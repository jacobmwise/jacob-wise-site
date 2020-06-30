import React from 'react';

import emailjs from 'emailjs-com';

import Nav from './subcomponents/Nav';
import Footer from './subcomponents/Footer';

export default function ContactUs() {

    function sendEmail(e) {
      e.preventDefault();

    //   let params = {message_html: "hi", from_name: 'name', reply_to: "email"};
      
      emailjs.sendForm('gmail', 'template_e1QUFN4M', '#contact', 'user_RcZaet1ysb5AuBBEi1tz3')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    }
  
    return (
        <div>
            <Nav />

            <h1>Contact Form</h1>
            <p>Contact me here with project suggestions, feedback, and any other inquiries.</p>

            <form className="contact-form mx-auto mt-5 col-12 col-md-4" id="contact" onSubmit={sendEmail} style={{height: '80vh'}}>
                <input type="hidden" name="contact_number" />
                <div className="form-group">
                    <label>Name</label>
                    <input className="form-control" type="text" name="from_name" required/>
                </div>
                
                <div className="form-group">
                    <label>Email</label>
                    <input className="form-control" type="email" name="user_email" />
                </div>
                
                <div className="form-group">
                    <label>Message</label>
                    <textarea className="form-control" name="message_html" />
                </div>
                
                <input type="submit" value="Send" />
            </form>

            <Footer />
        </div>
    );
  }


// class Contact extends React.Component {
//     state = {
//         name: '',
//         email: '',
//         message: ''
//     };

//     onSubmit(e) {
//         e.preventDefault();
//         console.log('submitted');

//         const id = "template_e1QUFN4M";
//         const vars = {message_html: "hi", from_name: 'name', reply_to: "email"};

//         emailjs.sendForm(
//             'gmail', id, vars
//         ).then(res => {
//             console.log(res);
//         }, err => {
//             console.log(err);
//         });
//     }

//     render() {
//         return (
//             <div>
//                 <Nav />
            
//                 <form onSubmit={this.onSubmit}>
//                     <input type="hidden" name="contact_number" />
                    
//                     <label>Name:</label>
//                     <input type="text" />

//                     <label>Email:</label>
//                     <input type="email" />
                    
//                     <label>Message:</label>
//                     <textarea />

//                     <input type="button" value="Send Message" />
//                 </form>

//                 <Footer />
//             </div>
//         );
//     }
// }

// export default Contact;