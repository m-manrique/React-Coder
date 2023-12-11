import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import CardItem from "./components/CardItem/CardItem";

import imgEquipos from "./assets/img/equipos.png"
import imgAsesorias from "./assets/img/asesorias.png"
import imgMantenimiento from "./assets/img/mantenimiento.png"

const App = () => {
  return (
    <>
      <NavBar />
      <ItemListContainer />
      <div className="container">       
      <CardItem
      name = "Equipos"
      description = "Equipos"
      img = {imgEquipos}
      />  
      <CardItem
      name = "Asesorias"
      description = "Asesorias"
      img = {imgAsesorias}
      />
      <CardItem
      name = "Mantenimiento"
      description = "Mantenimiento"
      img = {imgMantenimiento}
      />   
      </div>
    </>
  );
};

export default App;
