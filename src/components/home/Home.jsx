import React from "react";
import ListaProductoComponent from "../producto/ListaProductoComponent";

const Home = () => {
  return (
    <div className="container">
      <div className="row mt-2">
        <div className="col-12">
          <h4>Grupo</h4>
          {/* <img src="..." alt="..." class="rounded-circle"></img> */}
          <button type="button" className="btn btn-primary">
            Nacho <span className="badge badge-light">2</span>
          </button>
          <button type="button" className="btn btn-primary m-1">
            Joshe <span className="badge badge-light">3</span>
          </button>
          <button type="button" className="btn btn-primary">
            Max <span className="badge badge-light">9</span>
          </button>
        </div>
      </div>
      <div className="row mt-2">
        <div className="col-12">
          <ListaProductoComponent />
        </div>
      </div>
      <div className="row mt-2">
        <div className="col-12">
          <button className="btn btn-success btn-block">Pagar Cuenta</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
