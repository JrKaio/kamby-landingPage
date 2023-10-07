import React, { useState } from 'react';
import Title from '../layouts/Title';
import ContactLeft from './ContactLeft';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [username, setUsername] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  const emailValidation = (email) => {
    const emailPattern = /^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/;
    return emailPattern.test(email.toLowerCase());
  };

  const handleSend = (e) => {
    e.preventDefault();
    if (!username || !phoneNumber || !email || !subject || !message) {
      setErrMsg('Todos os campos são necessários.');
    } else if (!emailValidation(email)) {
      setErrMsg('Por favor forneça um email válido.');
    } else {
      setErrMsg('');
      emailjs
        .send('service_dmivbkm', 'template_c8mpiyo', {
           username,
          email,
           phoneNumber,
          subject,
          message,
        }, 'mNennAAIA5W2UrRsB')
        .then((response) => {
          setSuccessMsg(`Obrigado, ${username}! Sua mensagem foi enviada com sucesso.`);
          setUsername('');
          setPhoneNumber('');
          setEmail('');
          setSubject('');
          setMessage('');
        })
        .catch((error) => {
          console.error('Error sending email:', error);
          setErrMsg('Um erro ocorreu ao enviar esta mensagem.');
        });
    }
  };

  return (
    <section id="contact" className="w-full py-20 border-b-[1px] border-b-black">
      <div className="flex justify-center items-center text-center">
        <Title title="Cadastro" des="Cadastro de Produtores" />
      </div>
      <div className="w-full">
        <div className="w-full h-auto flex flex-col lgl:flex-row justify-between">
          <ContactLeft />
          <div className="w-full lgl:w-[60%] h-full py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] flex flex-col gap-8 p-4 lgl:p-8 rounded-lg shadow-shadowOne">
            <form className="w-full flex flex-col gap-4 lgl:gap-6 py-2 lgl:py-5">
              <div className="w-full flex flex-col lgl:flex-row gap-10">
                <div className="w-full lgl:w-1/2 flex flex-col gap-4">
                  <p className="text-sm text-gray-400 uppercase tracking-wide">
                    Nome
                  </p>
                  
                  <input
                    onChange={(e) => setUsername(e.target.value)}
                    value={username}
                    className={`${
                      errMsg === 'Todos os campos são necessários.' && 'outline-designColor'
                    } contactInput`}
                    type="text"
                  />
                </div>
                <div className="w-full lgl:w-1/2 flex flex-col gap-4">
                  <p className="text-sm text-gray-400 uppercase tracking-wide">
                    Número de telefone
                  </p>
                  <input
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    value={phoneNumber}
                    className={`${
                      errMsg === 'Todos os campos são necessários.' && 'outline-designColor'
                    } contactInput`}
                    type="text"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-sm text-gray-400 uppercase tracking-wide">
                  Email
                </p>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  className={`${
                    errMsg === 'Todos os campos são necessários.' && 'outline-designColor'
                  } contactInput`}
                  type="email"
                />
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-sm text-gray-400 uppercase tracking-wide">
                  Assunto
                </p>
                <input
                  onChange={(e) => setSubject(e.target.value)}
                  value={subject}
                  className={`${
                    errMsg === 'Todos os campos são necessários.' && 'outline-designColor'
                  } contactInput`}
                  type="text"
                />
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-sm text-gray-400 uppercase tracking-wide">
                  Menssagem
                </p>
                <textarea
                  onChange={(e) => setMessage(e.target.value)}
                  value={message}
                  className={`${
                    errMsg === 'Todos os campos são necessários.' && 'outline-designColor'
                  } contactTextArea`}
                  cols="30"
                  rows="8"
                ></textarea>
              </div>
              <div className="w-full">
                <button
                  onClick={handleSend}
                  className="w-full h-12 bg-[#141518] rounded-lg text-base text-gray-400 tracking-wider uppercase hover:text-white duration-300 hover:border-[1px] hover:border-designColor border-transparent"
                >
                  Send Message
                </button>
              </div>
              {errMsg && (
                <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-orange-500 text-base tracking-wide animate-bounce">
                  {errMsg}
                </p>
              )}
              {successMsg && (
                <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-green-500 text-base tracking-wide animate-bounce">
                  {successMsg}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

