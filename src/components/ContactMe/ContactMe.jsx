import React, { useEffect, useState } from "react";
import { useForm, ValidationError } from "@formspree/react";

function ContactMe() {
  const [state, handleSubmit] = useForm("movqqegd");
  const [checkSucceeded, setCheckSucceeded] = useState(false);

  useEffect(() => {
    if (state.succeeded) {
      setCheckSucceeded(true);
      const timeout = setTimeout(() => {
        setCheckSucceeded(false);
      }, 2000);

      return () => clearTimeout(timeout);
    }
  }, [state.succeeded]);

  return (
    <section id="contact" className="mt-20 text-white">
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-costume-color">
          Contact Me
        </h2>

        {!checkSucceeded ? (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Your email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full p-3 outline-none rounded-xl text-black"
                placeholder="name@something.com"
                required
              />
              <ValidationError prefix="Email" field="email" errors={state.errors} />
            </div>

            <div>
              <label
                htmlFor="subject"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="w-full p-3 outline-none rounded-xl text-black"
                placeholder="Let me know how I can help you"
                required
              />
              <ValidationError prefix="Subject" field="subject" errors={state.errors} />
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
              >
                Your message
              </label>
              <textarea
                id="message"
                name="message"
                rows="6"
                className="w-full resize-none text-black outline-none p-2 rounded-xl"
                placeholder="Leave a comment..."
                required
              />
              <ValidationError prefix="Message" field="message" errors={state.errors} />
            </div>

            <button
              type="submit"
              disabled={state.submitting}
              className="border-2 border-white mt-5 rounded sm:w-4/12 text-center bg-costume-color text-white outline-none flex items-center justify-center gap-4 p-1"
            >
              {state.submitting ? "Submitting..." : "Submit"}
            </button>
          </form>
        ) : (
          <p className="text-center mt-4 text-lg font-semibold">Thanks for reaching out!</p>
        )}
      </div>
    </section>
  );
}

export default ContactMe;
