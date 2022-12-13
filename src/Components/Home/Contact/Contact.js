import React, { useRef } from 'react';
import Lottie from 'react-lottie';
import mail from '../../../assets/animation/mail.json'
import emailjs from '@emailjs/browser';
import { toast } from 'react-hot-toast';

const Contact = () => {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: mail,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_sfh1yeu', 'template_azum8lc', form.current, 'b3X9Qy2ytQXPc-U9u')
            .then((result) => {
                console.log(result.text);
                toast.success('Message Sent')
                e.target.reset()
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 border border-primary">
            <div className="flex flex-col justify-between">
                <div className="space-y-2">
                    <h2 className="text-4xl font-bold lg:text-5xl">Get In Touch</h2>
                </div>
                <Lottie options={defaultOptions}
                    height={400}
                    width={400} />
            </div>
            <form ref={form} onSubmit={sendEmail} className="space-y-6 ng-untouched ng-pristine ng-valid">
                <div>
                    <label htmlFor="name" className="text-sm">Your name</label>
                    <input id="name" type="text" name="user_name" className="w-full p-3 rounded" />
                </div>
                <div>
                    <label htmlFor="email" className="text-sm">Your Email</label>
                    <input id="email" type="email" name="user_email" className="w-full p-3 rounded" />
                </div>
                <div>
                    <label htmlFor="message" className="text-sm">Message</label>
                    <textarea id="message" name="message" rows="3" className="w-full p-3 rounded"></textarea>
                </div>
                <button type="submit" className="btn btn-primary p-3 font-bold uppercase rounded w-28">Send</button>
            </form>
        </div>
    );
};

export default Contact;