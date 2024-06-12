"use client";
import React from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
const contentStyle = { background: "#000" };
const overlayStyle = { background: "rgba(0,0,0,0.5)" };
const arrowStyle = { color: "#000" };

export default function MobileApp() {
  return (
    <Popup
      modal
      nested
      closeOnDocumentClick
      trigger={
        <button className="flex h-full items-center gap-4 bg-[#0B0B0B] py-3 px-7 rounded-xl  border border-white/0 hover:border-white hover:bg-black transition-all ease-linear duration-500">
          <span className="text-base md:text-xl">Download APK</span>
        </button>
      }
      {...{
        contentStyle,
        overlayStyle,
        arrowStyle,
      }}
    >
      {(close) => (
        <div className="py-10 md:px-10 px-4 rounded-3xl overflow-hidden text-center">
          <div className="mx-auto max-w-xs h-40">
            <iframe
              className="h-full w-full"
              src="https://lottie.host/embed/95e40da8-cb48-4f88-8245-0806ca28b896/psN9I42q8D.json"
            ></iframe>
          </div>
          <h4 className="md:text-2xl font-semibold mb-2 text-xl">
            {" "}
            Important Notice:
          </h4>
          <p className="mb-4 text-sm">
            Our mobile app is currently undergoing scheduled maintenance. We
            apologize for any inconvenience this may cause. We are working
            diligently to improve your experience and will have the app back
            online shortly. <br />
            Please make use of the Web App. <br /> Thank you for your patience.
          </p>
          <a
            className="close flex h-full items-center gap-4 bg-[#0B0B0B] py-4 rounded-xl  border border-white/0 hover:border-white hover:bg-black transition-all ease-linear duration-500 w-fit mx-auto px-12"
            onClick={close}
          >
            <span>Close</span>
          </a>
        </div>
      )}
    </Popup>
  );
}
