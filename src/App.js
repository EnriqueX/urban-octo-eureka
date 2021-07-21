import React, {Component, useState, useEffect} from "react";
import './scss/style.scss';
import { HashRouter, Route, Switch } from 'react-router-dom';
import {API} from "aws-amplify";
import {withAuthenticator, AmplifySignOut} from "@aws-amplify/ui-react";
import {listArticulos} from "./graphql/queries";
import {createArticulo, createCompra, createVenta, deleteArticulo, deleteCompra, deleteVenta} from "./graphql/mutations";

const initialFormState = {nombre:'', descripcion: '', sustanciaActiva: ''}

function App() {
    const [articulos, setArticulos] = useState([]);
    const [formData, setFormData] = useState(initialFormState);

    useEffect(() => {fetchArticulos();}, [])

    async function fetchArticulos(){
        const apiData = await API.graphql({query: listArticulos})
        setArticulos(apiData.data.listArticulos.items);
    }

    async function saveArticulo(){
        if(!formData.nombre) return;
        await API.graphql({query: createArticulo, variables: {input: formData}});
        setArticulos([...articulos, formData]);
        setFormData(initialFormState);
    }

    async function dropArticulo({id}){
        const newArticulosArray = articulos.filter(articulo => articulo.id !== id);
        setArticulos(newArticulosArray);
        await API.graphql({query: deleteArticulo, variables: {input: {id}}});
    }

  return (
    <div className="App">
        <h1>Farmacia</h1>
        <input
            placeholder="nombre"
            value={formData.nombre}
            onChange={e => setFormData({...formData, 'nombre': e.target.value})}
        />
        <input
            placeholder="descripcion"
            value={formData.descripcion}
            onChange={e => setFormData({...formData, 'descripcion': e.target.value})}
        />
        <input
            placeholder="sustancia activa"
            value={formData.sustanciaActiva}
            onChange={e => setFormData({...formData, 'sustanciaActiva': e.target.value})}
        />
        <button onClick={saveArticulo}>Crear articulo</button>
        <div style={{marginBottom: 30}}>
            {
                articulos.map(articulo =>(
                    <div key={articulo.id || articulo.nombre}>
                        <h2>{articulo.nombre}</h2>
                        <p>{articulo.descripcion}</p>
                        <p>{articulo.sustanciaActiva}</p>
                        <button onClick={() => deleteArticulo(articulo.id)}>Borrar articulo</button>
                    </div>
                ))
            }
        </div>
        <AmplifySignOut />
    </div>
  );
}

export default withAuthenticator(App);
