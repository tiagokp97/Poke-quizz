import React from "react";

export default function ModalContato({ setShowModal }) {
  return (
    <div className="container-infos">
      <a
        href="https://www.linkedin.com/in/tiago-pesch-24621a1b5/"
        target="_blank"
        rel="noreferrer"
        onClick={() => setShowModal(false)}
      >
        Tiago
      </a>
      <a
        href="https://www.linkedin.com/in/cau%C3%AA-rafael-rodrigues-dos-santos-3b7a84157"
        target="_blank"
        rel="noreferrer"
        onClick={() => setShowModal(false)}
      >
        Caue
      </a>
    </div>
  );
}
