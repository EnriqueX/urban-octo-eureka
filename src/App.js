import {useState, useEffect} from "react";
import logo from './logo.svg';
import './App.css';
import {API} from "aws-amplify";
import {withAuthenticator, AmplifySignOut} from "@aws-amplify/ui-react";

const initialFormState = {nombre:''}

function App() {
    const [articulos, setArticulos] = useState([]);
    const [formData, setFormData] = useState(initialFormState);

    useEffect(() => {fetchArticulos();}, [])

    async function fetchArticulos(){
        const apiData = await API.graphql({query: 'listArticulos'})
        setArticulos(apiData.data.listArticulos.items);
    }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Ya tenemos auth!</h1>
      </header>
        <div style={{marginBottom: 30}}>
            {
                articulos.map(articulo =>(
                    <div key={articulo.id}>
                        <h2>articulo.nombre</h2>
                    </div>
                ))
            }
        </div>
        <AmplifySignOut />
    </div>
  );
}

export default withAuthenticator(App);
