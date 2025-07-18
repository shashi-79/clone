import React from "react";

export default function Form({ className }) {
  return (
    <div className={className}>
      <div animation="animate-slide-left" className="p-2 text-sm font-normal  grid gap-6 grid-cols-1 justify-center [&_input,textarea]:p-2 [&_input,textarea]:focus:outline-0 [&_input,textarea]:placeholder:text-c-gray-2 [&_input,textarea]:border-c-gray-3 [&_input,textarea]:focus:border-c-blue-9 [&_input,textarea]:border-1">
        <div className="grid gap-x-2 gap-y-6 grid-cols-1 md:grid-cols-2">
          <input
            type="text"
            placeholder="Your Name"
            name="name"
            autoComplete="on"
            minLength="4"
            required
          />

          <input
            type="tel"
            placeholder="Your Mobile"
            name="mobile"
            autoComplete="on"
            autoCorrect="on"
            minLength="5"
            required
          />

          <input
            type="email"
            placeholder="Your Email"
            name="email"
            autoComplete="on"
            autoCorrect="on"
            required
          />
        </div>
        <input
          type="text"
          placeholder="Subject"
          name="subject"
          autoComplete="on"
          autoCorrect="on"
          minLength="8"
          required
        />

        <textarea
          placeholder="Mssage"
          className="h-25"
        ></textarea>
        <div className="flex justify-center">
          <div className="bg-c-green-3 text-white rounded-full px-6 py-4">
            Send Message
          </div>
        </div>
      </div>
    </div>
  );
}
