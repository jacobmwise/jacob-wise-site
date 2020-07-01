import React from 'react';

import emailjs from 'emailjs-com';

import Nav from './subcomponents/Nav';
import Footer from './subcomponents/Footer';

export default function ContactUs() {

    let message = 'hi';

    function sendEmail(e) {
      e.preventDefault();

      e.target.from_name.value = '';
      e.target.from_email.value = '';
      e.target.message_html.value = '';
      
      emailjs.sendForm('gmail', 'template_e1QUFN4M', '#contact', 'user_RcZaet1ysb5AuBBEi1tz3')
        .then((result) => {
            console.log(result.text);
            message = "Your message has been sent!";
        }, (error) => {
            console.log(error.text);
        });
    }
  
    return (
        <div>
            <Nav />

            <div className="text-center">
                <h1 className="mt-5">Contact Form</h1>
                <h2>{message}</h2>
                <p>Contact me here with project suggestions, feedback, and any other inquiries.</p>
            </div>

            <form className="contact-form mx-auto mt-5 col-12 col-md-8" id="contact" onSubmit={sendEmail} style={{height: '80vh'}}>
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
                
                <input type="submit" value="Send" className="btn btn-info float-right" />
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