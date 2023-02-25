import { useState, useEffect } from "react";

const Formulario = () => {

  const [mascota, setMascota] = useState({})
  const [propietario, setPropietario] = useState({})
  const [email, setEmail] = useState({})
  const [date, setDate] = useState({})



  return (
    <div className="md:w-1/2 lg-2/5">
      <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>

      <p className="text-lg mt-5 mb-10 text-center">
        Añade pacientes y {""}
        <span className="text-indigo-600 font-bold">Administralos</span>
      </p>

      <form className="bg-white shadow-md rounded-lg py-10 px-5 mb-10">
        <div className="mb-5">
          <label
            htmlFor="mascota"
            className="block text-grey text-gray-700 font-bold uppercase"
          >
            Nombre Mascota
          </label>

          <input
            id="mascota"
            type="text"
            placeholder="Nombre de Mascota"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="propietario"
            className="block text-grey text-gray-700 font-bold uppercase"
          >
            Nombre Propietario
          </label>

          <input
            id="propietario"
            type="text"
            placeholder="Nombre del Propietario"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block text-grey text-gray-700 font-bold uppercase"
          >
            Email
          </label>

          <input
            id="email"
            type="email"
            placeholder="Email "
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="alta"
            className="block text-grey text-gray-700 font-bold uppercase"
          >
            Alta
          </label>

          <input
            id="alta"
            type="date"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="sintomas"
            className="block text-grey text-gray-700 font-bold uppercase"
          >
            Sintomas
          </label>

          <textarea
            id="sintomas"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            placeholder="Escribe los Sintomas"
          ></textarea>
        </div>
        <input
          type="submit"
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold rounded-xl hover:bg-indigo-700 hover:cursor-pointer transition-all"
          value="Agregar Paciente"
        />
      </form>
    </div>
  );
};

export default Formulario;
