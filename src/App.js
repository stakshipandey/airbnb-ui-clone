import React from 'react'
import Gallery from "./components/Gallery";
import Modal from "./components/Modal";

function App() {
  return (
    <div className="h-screen w-full flex items-center justify-center">
      <div className="mx-4" >
        <Modal />
      </div>
      <div className="mx-4">
        <Gallery />
      </div>
    </div>
  );
}

export default App;
