import React, { useState } from 'react'
import emailjs from 'emailjs-com'
import { CONTACT_SVG } from '../../assets/img/contact/contact_'

export const Contact = () => {
    const [msg, setmsg] = useState(false)
    const [loadingMsg, setloadingMsg] = useState(false)

    function sendEmail(e) {
        e.preventDefault()
        setmsg(true)
        emailjs
            .sendForm(
                'service_6c2lonq',
                'template_18z425d',
                e.target,
                '4YLFD22hWC9zWLpKV'
            )
            .then(
                (result) => {
                    console.log(result.text)
                    setmsg(true)
                    setTimeout(() => {
                        setmsg(false)
                        setloadingMsg(true)
                    }, 3000)

                    setTimeout(() => {
                        setloadingMsg('')
                    }, 10000)
                },
                (error) => {
                    console.log(error.text)
                }
            )
        e.target.reset()
    }

    return (
        <div
            id="contact"
            className="bg-gray-extralight z-30 text-gray-normal page-padding py-10 md:py-16 ">
            <div className="max-w-screen-xl grid gap-8 grid-cols-1 md:grid-cols-2 py-16 mx-auto">
                <div className="flex flex-col justify-between">
                    <div>
                        <h2 className="text-4xl lg:text-5xl font-bold leading-tight Poppins-SemiBold">
                            Lets talk about everything!
                        </h2>
                        <div className="text-gray-700 mt-8 Poppins-Regular">
                            Hate forms? Send us an{' '}
                            <a href='mailto:expbilal@gmal.com?subject = Feedback&body = Message"' className="underline">email</a> instead.
                        </div>
                    </div>
                    <div className="mt-8 text-center">{CONTACT_SVG}</div>
                </div>
                <form onSubmit={sendEmail}>
                    <div className="space-y-4 md:space-y-6 lg:space-y-8">
                        <div>
                            <span className="uppercase text-sm text-gray-normal Poppins-SemiBold">
                                Full Name
                            </span>
                            <input
                                className="w-full bg-gray-300 text-gray-900 mt-2 p-3 focus:outline-none focus:shadow-outline"
                                type="text"
                                required
                                name="name"
                                placeholder=""
                            />
                        </div>
                        <div className="">
                            <span className="uppercase text-sm text-gray-normal Poppins-SemiBold">
                                Email
                            </span>
                            <input
                                name="email"
                                className="w-full bg-gray-300 text-gray-900 mt-2 p-3 focus:outline-none focus:shadow-outline"
                                type="email"
                                required
                            />
                        </div>
                        <div className="">
                            <span className="uppercase text-sm text-gray-normal Poppins-SemiBold">
                                Message
                            </span>
                            <textarea
                                name="message"
                                required
                                className="w-full h-32 bg-gray-300 text-gray-900 mt-2 p-3 focus:outline-none focus:shadow-outline"></textarea>
                        </div>
                        <div className="">
                            <button
                                type="submit"
                                className="uppercase btn-purple-filled text-sm Poppins-SemiBold tracking-wide hover:text-orange-primary p-3  w-full">
                                {msg ? 'Sending Email...' : 'Send Message'}
                            </button>
                            <div className="text-purple-primary text-sm py-1 text-center">
                                {loadingMsg && ' Message Sent Successfully '}
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
