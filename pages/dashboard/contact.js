// import Button from '../components/Button';
// import emailjs from '@emailjs/browser';
// import {useRef} from 'react';
// import contentList from '../assets/contents.json';

// const Contact = () => {
//   const form = useRef ();

//   const sendEmail = e => {
//     e.preventDefault ();

//     emailjs
//       .sendForm (
//         process.env.REACT_APP_SERVICE_ID,
//         process.env.REACT_APP_TEMPLATE_ID,
//         form.current,
//         process.env.REACT_APP_PUBLIC_KEY
//       )
//       .then (
//         result => {
//           console.log (result.text);
//           alert ('Message sent successfully!');
//           window.location.reload (false);
//         },
//         error => {
//           console.log (error.text);
//           alert ('Failed to send the message, please try again!');
//         }
//       );
//   };

//   return (
//     <div className="contact-container">
//       <div className="contact-left-part">
//         <h2 className="contact-title">{Contact me}</h2>
//         <div className="contact-subheading">
//           <p className="contact-content">
//             Let's get in touch! Don't hesitate to contact me using the form below or via email.
//             I am open for any IT-related opportunities, especially Front-end or Back-end developer.
//           </p>
//         </div>
//         <div className="contact-form">
//           <form ref={form} onSubmit={sendEmail}>
//             <ul>
//               <li className="half">
//                 <input type="text" name="name" placeholder="Name" required />
//               </li>
//               <li className="half">
//                 <input type="email" name="email" placeholder="Email" required />
//               </li>
//               <li>
//                 <input
//                   type="text"
//                   name="subject"
//                   placeholder="Subject"
//                   required
//                 />
//               </li>
//               <li>
//                 <textarea placeholder="Message" name="message" required />
//               </li>
//               <li>
//                 <Button>
//                   <input
//                     type="submit"
//                     className="flat-button-content"
//                     value="CONTACT"
//                   />
//                 </Button>
//               </li>
//             </ul>
//           </form>
//         </div>
//       </div>
//       <div className="contact-right-part" />
//     </div>
//   );
// };
// export default Contact;
