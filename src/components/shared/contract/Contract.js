import React from "react";
import { AiFillInstagram, AiFillYoutube } from "react-icons/ai";
import { MdOutlineAlternateEmail } from "react-icons/md";

function Contract() {
  return (
    <>
      <div className="px-[50px] sm:px-[120px] md:px-[180px] lg:px-[200px] xl:px-[250px] ">
        {/* contranct section  */}
        <div className="text-[#2a2a2a] pb-8 ">
          <h2 className=" font-medium uppercase text-[24px] lg:text-[30px] xl:text-[38px]">
            me contacter
          </h2>
          <p className="text-[16px]">
            Champs Obligatoires <span className="text-red-500">*</span>
          </p>
        </div>
        <div>
          <form>
            <div className="space-y-4">
              <div className="flex justify-between">
                <div className="relative w-[48%]">
                  <input
                    className="w-full border border-black p-[8px]"
                    type="text"
                    name="Prénom"
                    placeholder="Prénom"
                    required
                  />
                  <span className="absolute text-red-500 right-[-10px] top-0">
                    *
                  </span>
                </div>
                <div className="relative w-[48%]">
                  <input
                    className="w-full border border-black p-[8px]"
                    type="text"
                    name="Nom"
                    placeholder="Nom"
                  />
                </div>
              </div>
              <div className="relative w-full">
                <input
                  className="w-full border border-black p-[8px]"
                  type="email"
                  name="Prénom"
                  placeholder="Address Mail"
                  required
                />
                <span className="absolute text-red-500 right-[-10px] top-0">
                  *
                </span>
              </div>
              <div className="relative w-full">
                <select
                  className="w-full border border-black p-[8px]"
                  name="Object"
                  placeholder="Object"
                  required
                >
                  <option value="">Object</option>
                  <option value="Mariage / Évènement">
                    Mariage / Évènement
                  </option>
                  <option value="Portrait Entreprise">
                    Portrait Entreprise
                  </option>
                  <option value="Séance Couple">Séance Couple</option>
                  <option value="Séance Solo">Séance Solo</option>
                  <option value="Autres Demandes">Autres</option>
                </select>
                <span className="absolute text-red-500 right-[-10px] top-0">
                  *
                </span>
              </div>
              <div className="relative w-full">
                <textarea
                  className="w-full border border-black p-[8px]"
                  type="text"
                  name="Prénom"
                  rows="6"
                  placeholder="Message"
                  required
                />
                <span className="absolute text-red-500 right-[-10px] top-0">
                  *
                </span>
              </div>
            </div>
            <div className="pt-6">
              <p className="text-[16px] font-medium">
                Conformité RGPD <span className="text-red-500">*</span>
              </p>
              <div className="flex items-center space-x-2 ">
                <input
                  className="w-4 h-4 accent-[#2a2a2a]"
                  type="checkbox"
                  id="check"
                  required
                />
                <label htmlFor="check" className="text-[16px]">
                  Je consens à transmettre mes informations à : Benjamin Oddou
                </label>
              </div>
            </div>
            <div className="py-6">
              <button className="w-full py-2 bg-[#2a2a2a] hover:bg-opacity-80 text-white ">
                Envoyer
              </button>
            </div>
          </form>
        </div>
        {/* footer section  */}
        <div className="sm:flex sm:justify-between border-t-2 mt-12 py-6 border-[#2a2a2a]">
          <div className="hidden sm:flex space-x-8">
            <div className="w-[24px] h-[24px]">
              <AiFillInstagram
                className="hover:scale-125 transition duration-500"
                size="full"
              />
            </div>
            <div className="w-[24px] h-[24px]">
              <AiFillYoutube
                className="hover:scale-125 transition duration-500"
                size="full"
              />
            </div>
            <div className="w-[24px] h-[24px]">
              <MdOutlineAlternateEmail
                className="hover:scale-125 transition duration-500"
                size="full"
              />
            </div>
          </div>
          <div>
            <p className="text-[16px] text-center sm:text-end text-[#2a2a2a] ">
              © 2022 Images par <b>Benjamin Oddou</b>{" "}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contract;
