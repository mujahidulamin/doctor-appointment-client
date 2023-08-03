import React from "react";
import "./Faq.css";

const Faq = () => {
  return (
    <div className="bg-faq">
      <div>
        <section className="text-gray-700">
          <div className="container px-5 pb-8 mx-auto">
            <div className="text-center mb-20">
              <h1 className="text-5xl font-bold text-center title-font text-white mb-4">
                Have any questions?
              </h1>
              <p className="text-white leading-relaxed xl:w-4/5 lg:w-3/4 mx-auto">
                Find below our frequently asked questions. If you have other
                questions please contact us.
              </p>
            </div>

            <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2 text-justify">
              <div className="w-full lg:w-1/2 px-4 py-2">
                <details className="mb-4">
                  <summary className="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                    What do we treat?
                  </summary>

                  <span className="text-white ">
                    Common health issue Ask anything you would normally ask your
                    GP. You can have an instant video with one of our GPs via a
                    digital consultation from anywhere, at any time of day.
                    Specialist advice Sometimes it's helpful to see a specialist
                    when you want. And get educational advice, pre-screening,
                    monitoring and follow-ups. For maternal and infant health
                    care, chronic diseases such as diabetes, or other
                    conditions, DocTime can help you to connect with the right
                    specialist doctor and to stay healthy. More than 20
                    different specialities are available on DocTime. Mental
                    health and wellbeing In a fast paced world, it is important
                    to monitor and protect your mental health and wellbeing.
                    Doctors can help you stay healthy whether you have symptoms
                    at home or in your workplace of stress, smoking, anxiety,
                    bereavement or depression.
                  </span>
                </details>
                <details className="mb-4">
                  <summary className="font-semibold bg-gray-200 rounded-md py-2 px-4">
                    How does it work?
                  </summary>

                  <span className="text-white ">
                    You can register on our App and access several medical
                    services easily. The basic video consultation service is
                    straightforward: search for your relevant doctor with easy
                    filters, talk to your doctor directly as included in your
                    DocTime healthcare package or pay just prior the on-demand
                    consultation starts. Then access your prescription uploaded
                    by the doctor and you can order medicine or tests as
                    recommended. Keep in touch with the doctor and use medicine
                    reminders until your feel completely healthy again. Access
                    plenty of other medical services including your personal
                    Electronic Patient Record and health tips at any time
                    through our homepage
                  </span>
                </details>
                <details className="mb-4">
                  <summary className="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                    Is my data secure?
                  </summary>

                  <span className="text-white ">
                    Yes, we use 256 bit encryption for the video consultation.
                    We also store all your information securely in our servers.
                  </span>
                </details>
              </div>
              <div className="w-full lg:w-1/2 px-4 py-2">
                <details className="mb-4">
                  <summary className="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                    How do I make payment?
                  </summary>

                  <span className="text-white">
                    You can make payment online using bKash, rocket, Debit card,
                    credit card.
                  </span>
                </details>
                <details className="mb-4">
                  <summary className="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                    When are the doctors available for consultation?
                  </summary>

                  <span className="py-2 text-white">
                    Doctors are available according to their time availability.
                    Our platform is available 24/7. Any doctor can come online
                    at any time if they want.
                  </span>
                </details>
                <details className="mb-4">
                  <summary className="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                    Can we select a doctor of our own choice?
                  </summary>

                  <span className="py-2 text-white">
                    Yes, certainly, you can select any doctor registered in the
                    DocTime platform. When you search for a doctor or give your
                    symptoms, DocTime will show you all the most relevant
                    doctors. You can read their profiles and also filter/sort by
                    price and other parameters. Just select the doctor, and
                    start your consultation immediately or book an appointment.
                  </span>
                </details>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Faq;
