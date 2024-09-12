import { useState } from "react";
import "./App.css";
import { data } from "./data";
import { useSearchParams } from "react-router-dom";

function App() {
  const [buscar, setBuscar] = useState("");
  const [param, setParam] = useSearchParams('')

  function agregarParams(){
    setParam({
      term: 'valor',
      name: 'gustavo'
    })
  }
  

  return (
    
    <div className="text-3xl font-bold underline">
      <button onClick={agregarParams}>
        agregar parametro
      </button>
      <h1 className="m-5">Buscador</h1>
      <form className="max-w-md mx-auto">
        <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
          Search
        </label>
        <div className="relative">
          <input
            type="search"
            id="default-search"
            onChange={(e) => {
              setBuscar(e.target.value)
              
            }}
            className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search Mockups, Logos..."
            required
          />
        </div>
      </form>

      <div className="relative overflow-x-auto m-5">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Primer nombre
              </th>
              <th scope="col" className="px-6 py-3">
                Segundo nombre
              </th>
              <th scope="col" className="px-6 py-3">
                email
              </th>
              <th scope="col" className="px-6 py-3">
                Genero
              </th>
            </tr>
          </thead>
          <tbody>
            {
              data.filter((item) => {
                
                return buscar.toLowerCase() === ''
                      ? item
                      : item.first_name.toLowerCase().includes(buscar);
              }).map((info) => (
                <tr key={info.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <td
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {info.first_name}
                  </td>
                  <td
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {info.last_name}
                  </td>
                  <td
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {info.email}
                  </td>
                  <td
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {info.gender}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
