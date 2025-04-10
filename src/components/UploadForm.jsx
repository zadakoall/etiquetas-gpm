import React from "react";

const UploadForm = ({ onUpload, layout, setLayout }) => (
  <div className="controls">
    <label>
      Subir Excel con columna "NOMBRE":
      <input type="file" onChange={onUpload} />
    </label>
    <label>
      Etiquetas por hoja:
      <select value={layout} onChange={(e) => setLayout(e.target.value)}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="4">4</option>
      </select>
    </label>
    <button onClick={() => window.print()}>Imprimir</button>
  </div>
);

export default UploadForm;
