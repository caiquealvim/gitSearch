import axios from "axios";
import { useState } from "react";

type GITHUBResponse = {
  name: string;
  avatar_url: string;
  bio: string;
};

function App() {
  const [userName, setUserName] = useState("");
  const [name, setName] = useState("Aguardando...");
  const [bio, setBio] = useState("Aguardando...");
  const [avatarURL, setAvatarURL] = useState("Aguardando...");

  const handleSearch = () => {
    axios
      .get<GITHUBResponse>(`https://api.github.com/users/${userName}`)
      .then((res) => {
        setName(res.data.name);
        setBio(res.data.bio);
        setAvatarURL(res.data.avatar_url);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (

    <div className="container-app">
      <div className="container">
        <div className="top">
        <h1>Programadores</h1>
          <h2>Buscador de Perfis<br/>do GITHUB</h2>
            <input
              type="text"
              placeholder="Digite um usuario"
              onChange={(e) => setUserName(e.target.value)}
            />
            <button onClick={handleSearch}>Buscar</button>
        </div>
         
            <div className="form">
               <img src={avatarURL}  />
              <h1>{name}</h1>
              <p>{bio}</p>
          </div>
       </div>
    </div>
  );
}

export default App;