import React from "react";

function Contract() {
  return (
    <>
      <div className="px-[250px] pb-12">
        <div className="text-[#2a2a2a] pb-8 ">
          <h2 className=" font-medium uppercase text-[38px] ">me contacter</h2>
          <p className="text-[16px]">
            Champs Obligatoires <span className="text-red-500">*</span>
          </p>
        </div>
        <div>
          <form>
            <div className="space-y-4">
              <div class="flex justify-between">
                <div class="relative w-[48%]">
                  <input
                    className="w-full border border-black p-[8px]"
                    type="text"
                    name="Prénom"
                    placeholder="Prénom"
                    required
                  />
                  <span class="absolute text-red-500 right-[-10px] top-0">
                    *
                  </span>
                </div>
                <div class="relative w-[48%]">
                  <input
                    className="w-full border border-black p-[8px]"
                    type="text"
                    name="Nom"
                    placeholder="Nom"
                  />
                </div>
              </div>
              <div class="relative w-full">
                <input
                  className="w-full border border-black p-[8px]"
                  type="email"
                  name="Prénom"
                  placeholder="Address Mail"
                  required
                />
                <span class="absolute text-red-500 right-[-10px] top-0">*</span>
              </div>
              <div class="relative w-full">
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
                <span class="absolute text-red-500 right-[-10px] top-0">*</span>
              </div>
              <div class="relative w-full">
                <textarea
                  className="w-full border border-black p-[8px]"
                  type="text"
                  name="Prénom"
                  rows="6"
                  placeholder="Message"
                  required
                />
                <span class="absolute text-red-500 right-[-10px] top-0">*</span>
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
                <label for="check" className="text-[16px]">
                  Je consens à transmettre mes informations à : Benjamin Oddou
                </label>
              </div>
            </div>
            <div>
              <button className="w-full py-2 mt-6 bg-[#2a2a2a] hover:bg-opacity-80 text-white ">
                Envoyer
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contract;
