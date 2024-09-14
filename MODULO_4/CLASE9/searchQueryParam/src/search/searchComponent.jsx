import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const SearchComponent = () => {

    const [characterList, setCharacterList] = useState([])
    const [query, setQuery] = useState('')
    const navigate = useNavigate();
    const location = useLocation();
    const queryParam = new URLSearchParams(location.search);

    const handleSubmit = (e) => {
        e.preventDefault();

        if(query){
            navigate(`/?character=${query}`)
        }else{
            navigate('/')
        }
    };

  useEffect(() => {
    
    const fetchCharacter = async () => {
        const characterQuery = queryParam.get('character')
        const url = characterQuery 
                  ? `https://rickandmortyapi.com/api/character/?name=${characterQuery}`
                  : "https://rickandmortyapi.com/api/character";
      try {
        const res = await fetch(url);
        const data = await res.json();

        setCharacterList(data.results)

        console.log(data, "data <==");
      } catch (error) {
        console.error("Error en el servicio", error);
      }
    };

    fetchCharacter();
  }, [location.search]);

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <div className="relative flex">
          <input
            type="search"
            value={query}
            onChange={(e) => {setQuery(e.target.value)}}
            className="relative m-0 -me-0.5 block flex-auto rounded-s border border-solid border-neutral-200 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-surface outline-none transition duration-200 ease-in-out placeholder:text-neutral-500 focus:z-[3] focus:border-primary focus:shadow-inset focus:outline-none motion-reduce:transition-none dark:border-white/10 dark:text-white dark:placeholder:text-neutral-200 dark:autofill:shadow-autofill dark:focus:border-primary"
            placeholder="Search"
            aria-label="Search"
            id="exampleFormControlInput3"
            aria-describedby="button-addon3"
          />
          <button
            className="z-[2] inline-block rounded-e border-2 border-primary px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-primary transition duration-150 ease-in-out hover:border-primary-accent-300 hover:bg-primary-50/50 hover:text-primary-accent-300 focus:border-primary-600 focus:bg-primary-50/50 focus:text-primary-600 focus:outline-none focus:ring-0 active:border-primary-700 active:text-primary-700 dark:text-primary-500 dark:hover:bg-blue-950 dark:focus:bg-blue-950"
            data-twe-ripple-init
            data-twe-ripple-color="white"
            type="submit"
            id="button-addon3"
          >
            Search
          </button>
        </div>
      </form>
      <div>
        {
            characterList.length > 0
            ?(characterList.map((item) => {
               return (<div key={item.id}>
                    <img src={item.image} alt="imagen"/>
                    <h3>{item.name}</h3>
                    <p>{item.status}</p>
                </div>)
            })
            ) : (
                <p> No hay characteres </p>
            )
        }
      </div>
    </div>
  );
};

export default SearchComponent;
