import React from "react";

const NavBar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <span class="navbar-brand mb-0 h1">Desafío 2</span>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Nosotros
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Servicios
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link">Contacto</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
