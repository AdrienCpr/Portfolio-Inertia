import React, {MutableRefObject, useRef, useState} from 'react';
import ReCAPTCHA from "react-google-recaptcha";
import {router} from "@inertiajs/react";

const Contact = ({REACT_APP_SITE_KEY }: {REACT_APP_SITE_KEY: string }) => {
    const recaptcha: MutableRefObject<ReCAPTCHA | null> = useRef(null);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e: { target: { name: any; value: any; }; }) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value});
    };

    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();

        // @ts-ignore
        const captchaValue = recaptcha.current.getValue();
        if (!captchaValue) {
            alert("Please verify the reCAPTCHA!");
        } else {
            const res = await fetch("https://captcha.adriencompare.com/verify", {
                method: "POST",
                body: JSON.stringify({captchaValue}),
                headers: {
                    "content-type": "application/json",
                },
            });
            const data = await res.json();
            if (data.success) {
                console.log(formData);
                router.post('/send',
                    {
                        name: formData.name,
                        email: formData.email,
                        message: formData.message
                    }
                );
                setFormData({name: '', email: '', message: ''});
            } else {
                alert("reCAPTCHA validation failed!");
            }
        }
    };

    return (
        <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
                <div className="space-y-2">
                    <h2 className={`text-3xl font-bold tracking-tighter mb-8 sm:text-5xl
                        dark:text-darkQuaternary
                        text-lightQuaternary`}
                    >
                        Contact
                    </h2>
                    <form className="w-full max-w-md mx-auto space-y-4" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="name" className={`block
                                dark:text-darkQuaternary
                                text-lightQuaternary`}
                            >
                                Nom :
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full px-4 py-2 mt-2 border rounded-md dark:bg-darkTertiary"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className={`block
                                dark:text-darkQuaternary
                                text-lightQuaternary`}
                            >
                                E-mail :
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full px-4 py-2 mt-2 border rounded-md dark:bg-darkTertiary"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className={`block
                                text-lightQuaternary
                                dark:text-darkQuaternary`}
                            >
                                Message :
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                className="w-full px-4 py-2 mt-2 border rounded-md dark:bg-darkTertiary"
                                required
                            ></textarea>
                        </div>
                        <div>
                            <button type="submit"
                                    className={`px-4 py-2 font-semibold rounded-md
                                        hover:bg-lightTertiary
                                        text-lightQuaternary
                                        bg-lightPrimary
                                        border border-lightQuaternary
                                        dark:hover:bg-darkPrimary
                                        dark:text-darkQuaternary
                                        dark:bg-darkTertiary
                                        dark:border dark:border-darkQuaternary`}>
                                Envoyer
                            </button>
                        </div>
                        <ReCAPTCHA ref={recaptcha} sitekey={REACT_APP_SITE_KEY}/>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
