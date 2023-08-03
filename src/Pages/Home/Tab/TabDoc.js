import React from 'react';
import { Tab } from "@headlessui/react";
import classNames from "classnames";
import './TabDoc.css'
import doc1 from '../../../assets/doctor/doctor-1.png'
import doc2 from '../../../assets/doctor/doctor-2-removebg-preview.png'
import doc3 from '../../../assets/doctor/doctor-3-removebg-preview.png'
import doc4 from '../../../assets/doctor/doctor-1.png'

const TabDoc = () => {
    return (
        <div className="bg-tab pb-16">
      <h2 className="text-white text-center text-4xl pb-8 pt-16">OUR CULTURE</h2>
      <div className="w-full  px-8 sm:px-0">
        <Tab.Group>
          <div className="max-w-xl mx-auto">
            <Tab.List className="flex space-x-1 rounded-xl p-1">
              <Tab
                className={({ selected }) =>
                  classNames(
                    "w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-white",
                    selected
                      ? "bg-[#07acf3] text-white"
                      : " text-white"
                  )
                }
              >
                ADAPTABLE
              </Tab>

              <span className="text-white inline-block mt-2">|</span>

              <Tab
                className={({ selected }) =>
                  classNames(
                    "w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-white",
                    selected
                      ? "bg-[#07acf3] text-white  "
                      : " text-white"
                  )
                }
              >
                RELIABLE
              </Tab>
              <span className="text-white inline-block mt-2">|</span>
              <Tab
                className={({ selected }) =>
                  classNames(
                    "w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-white",
                    selected
                      ? "bg-[#07acf3] text-white "
                      : " text-white"
                  )
                }
              >
                COMFORTABLE
              </Tab>
              <span className="text-white inline-block mt-2">|</span>
              <Tab
                className={({ selected }) =>
                  classNames(
                    "w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-white",
                    selected
                      ? "bg-[#07acf3] text-white  "
                      : " text-white rounded-lg"
                  )
                }
              >
                SIMPLE
              </Tab>
            </Tab.List>
          </div>

          <div className="lg:px-10 md:px-8 px-2">
            <Tab.Panels className="mt-8">

              <Tab.Panel className="">
                <div className="flex lg:flex-row md:flex-row flex-col items-center pt-8 gap-6">
                  <div className="lg:w-1/2 w-full">
                    <h1 className="text-white pb-8 adapt">ADAPTABLE</h1>
                    <p className="text-white">Lorem ipsum dolor sit amet consectetur. Fermentum lobortis est eget consectetur amet nunc ut aliquet porttitor. Interdum massa diam adipiscing porta eget amet tellus sed. Augue amet ridiculus suspendisse eu metus fringilla posuere egestas.</p>
                  </div>
                  <div className="lg:w-1/2 w-full flex lg:justify-end">
                    <img src= {doc1} alt="" />
                  </div>
                </div>
              </Tab.Panel>


              <Tab.Panel className="">
                <div className="flex lg:flex-row md:flex-row flex-col items-center pt-8 gap-6">
                  <div className="lg:w-1/2 w-full">
                    <h1 className="text-white pb-8 adapt">RELIABLE</h1>
                    <p className="text-white">Lorem ipsum dolor sit amet consectetur. Fermentum lobortis est eget consectetur amet nunc ut aliquet porttitor. Interdum massa diam adipiscing porta eget amet tellus sed. Augue amet ridiculus suspendisse eu metus fringilla posuere egestas.</p>
                  </div>
                  <div className="lg:w-1/2 w-full flex lg:justify-end">
                    <img src= {doc2} alt="" />
                  </div>
                </div>
              </Tab.Panel>


              <Tab.Panel className="">
                <div className="flex lg:flex-row md:flex-row flex-col items-center pt-8 gap-6">
                  <div className="lg:w-1/2 w-full">
                    <h1 className="text-white pb-8 adapt">COMFORTABLE</h1>
                    <p className="text-white">Lorem ipsum dolor sit amet consectetur. Fermentum lobortis est eget consectetur amet nunc ut aliquet porttitor. Interdum massa diam adipiscing porta eget amet tellus sed. Augue amet ridiculus suspendisse eu metus fringilla posuere egestas.</p>
                  </div>

                  <div className="lg:w-1/2 w-full flex lg:justify-end">
                    <img src= {doc3} alt="" />
                  </div>
                </div>
              </Tab.Panel>

              <Tab.Panel className="">
                <div className="flex lg:flex-row md:flex-row flex-col items-center pt-8 gap-6">
                  <div className="lg:w-1/2 w-full">
                    <h1 className="text-white pb-8 adapt">SIMPLE</h1>
                    <p className="text-white">Lorem ipsum dolor sit amet consectetur. Fermentum lobortis est eget consectetur amet nunc ut aliquet porttitor. Interdum massa diam adipiscing porta eget amet tellus sed. Augue amet ridiculus suspendisse eu metus fringilla posuere egestas.</p>
                  </div>
                  <div className="lg:w-1/2 w-full flex lg:justify-end">
                    <img src= {doc4} alt="" />
                  </div>
                </div>
              </Tab.Panel>

            </Tab.Panels>
          </div>
        </Tab.Group>
      </div>

      <div className='border-bottom'>

            </div>
    </div>
    );
};

export default TabDoc;