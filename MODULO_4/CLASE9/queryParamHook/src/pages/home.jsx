import React from 'react'
import { useSearchParams } from 'react-router-dom'
import Aside from '../components/aside'

const Home = () => {

    const [param, setParam] = useSearchParams('')

    function handleAddParam(){
        setParam({
            term: 'test',
            name: 'daniela',
            new: 'hola'
        })
    }

    function handleUpdateParam(){
        setParam({
            term: 'margen',
            name: 'pick'
        })
    }

    function handleAddParam2(){
        param.set('link','buenas')
        setParam(param)
    }

    function handleDeleted(){
        param.delete('name')
        setParam(param)
    }

  return (
    <div>
        <button type='button' onClick={handleAddParam}>
            Query1
        </button>
        <button type='button' onClick={handleUpdateParam}>
            Query2
        </button>
        <button type='button' onClick={handleAddParam2}>
            Query3
        </button>
        <button type='button' onClick={handleDeleted}>
            Eliminar
        </button>
        <Aside />
    </div>
  )
}

export default Home