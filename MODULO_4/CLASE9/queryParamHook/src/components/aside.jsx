import React from 'react'
import { useSearchParams } from 'react-router-dom';

const Aside = () => {

    const [param] = useSearchParams('')
    const name = param.get('name') ?? '';
    const term = param.get('term') ?? '';

    console.log(name,'name <=---');
    


  return (
    <div>
        <h1>Este componente es el Aside</h1>
        <h2>
            Nombre del usuario queryParam: {name}
        </h2>
        <h2>
            termino del usuario queryParam: {term}
        </h2>
    </div>
  )
}

export default Aside