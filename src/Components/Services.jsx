import React from "react";

function Services() {
  return (
    <div className="flex justify-center items-center flex-col mt-[3rem]">
      <div className="text-2xl">SERVICES</div>
      <div className="underLined"></div>
      <div className="text-6xl mt-16 font-[400]">
        We provide Artificial Intelligence Services
      </div>
      <div className="cards mt-10">
        <div className="relative flex justify-center items-center group/item1 hover:border-2 hover:border-[rgb(1,201,155)] rounded-lg ">
          <div className="transpar greenDiv"></div>
          <div className="headerCard">
            <div className="cardHeader">
              <div>
                <span className="cardNumbers">0</span>
                <span className="cardNumbers group-hover/item1:text-[rgb(1,201,155)] group-hover/item1:opacity-100">1</span>
              </div>
              <div className="cardHeading border-none text-[rgb(1,201,155)] group-hover/item1:translate-x-4">
                Biometrices
              </div>
            </div>
            <h5 className="cardBody border-none">
              Academia-backed & In-house researched State-of-the-Art Face,
              Fingerprint, and Iris Recognition SDKs. Enable real-time automated
              Biometric applications on edge devices even without an active
              internet connection.
            </h5>
          </div>
        </div>
        <div className="relative flex justify-center items-center group/item2 hover:border-2 hover:border-[rgb(63,189,241)] rounded-lg ">
          <div className="transpar blueDiv"></div>
          <div className="headerCard">
            <div className="cardHeader">
              <div>
                <span className="cardNumbers">0</span>
                <span className="cardNumbers group-hover/item2:text-[rgb(63,189,241)] group-hover/item2:opacity-100">2</span>
              </div>
              <div className="cardHeading border-none text-[rgb(63,189,241)] group-hover/item2:translate-x-4">
                Image-Analysis
              </div>
            </div>
            <h5 className="cardBody border-none">
              Outsource the overly complex image analysis work to our
              intelligent machines that adaptively learn, so you can focus on
              making the best decisions for your business.
            </h5>
            <div className="cardBubble hidden top-0 left-[320px] group-hover/item2:block group-hover/item2:bg-[rgb(63,189,241)]"></div>
          </div>
        </div>
        <div className="relative flex justify-center items-center group/item3 hover:border-2 hover:border-[rgb(255,96,95)] rounded-lg">
          <div className="transpar2 redDiv"></div>
          <div className="headerCard">
            <div className="cardHeader">
              <div>
                <span className="cardNumbers">0</span>
                <span className="cardNumbers group-hover/item3:text-[rgb(255,96,95)] group-hover/item3:opacity-100">3</span>
              </div>
              <div className="cardHeading border-none text-[rgb(255,96,95)] group-hover/item3:translate-x-4">
                Cross-Media Translation
              </div>
            </div>
            <h5 className="cardBody border-none">
              Will something like Siri or Alexa enhance your business? We can
              deliver text-to-speech, text-to-image, speech-to-text,
              speech-to-image, speech-to-image, image-to-text and
              image-to-speech solutions for maximum convenience.
            </h5>
          </div>
        </div>
        <div className="relative flex justify-center items-center group/item4 hover:border-2 hover:border-[rgb(255,159,49)] rounded-lg">
          <div className="transpar2 yellowDiv"></div>
          <div className="headerCard">
            <div className="cardHeader">
              <div>
                <span className="cardNumbers">0</span>
                <span className="cardNumbers group-hover/item4:text-[rgb(255,159,49)] group-hover/item4:opacity-100">4</span>
              </div>
              <div className="cardHeading border-none text-[rgb(255,159,49)] group-hover/item4:translate-x-4 ">
                3D Modelling and Design.
              </div>
            </div>
            <h5 className="cardBody border-none">
              We offer services for automated generation of 3D assets with
              realistic shapes and textures. We animate the 3D models with voice
              and videos with an aim to retarget voice and/or expressions with
              pose from a single Image/video.
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
