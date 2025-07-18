import React from "react";

export default function NewsLetter({className}) {
  return (
    <div className={"text-white flex flex-col gap-5  pb-8 "+className}>
      <div className="font-bold ">Our Newsletter</div>

      <div className="text-sm font-medium ">
        Sign up for Our daily Newsletter
      </div>

      <div className="rounded-4xl bg-white flex">
        <input
          className="flex-grow focus:outline-none px-1 text-sm text-c-gray-1 my-2 ml-4"
          type="email"
          placeholder="example@site.com"
          name="email"
        />

        <input
          className="bg-c-green-3 rounded-4xl py-2 px-4 "
          type="submit"
          value="Subscribe"
        />

        <style jsx>
          {`
                input:-webkit-autofill {
                    box-shadow: 0 0 0 1000px white inset;
                    -webkit-box-shadow: 0 0 0 1000px white inset;
                    -webkit-text-fill-color: #000 !important;
                }
                `}
        </style>
      </div>
    </div>
  );
}
