import React, { useEffect, useState } from "react";
import Tag from "./components/Tag";
import UploadForm from "./components/UploadForm";
import { loadBaseExcel, parseUploadedExcel } from "./utils/excelParser";
import "./index.css";

const App = () => {
  const [base, setBase] = useState([]);
  const [etiquetas, setEtiquetas] = useState([]);
  const [layout, setLayout] = useState("1");

  useEffect(() => {
    loadBaseExcel().then(setBase);
  }, []);

  const handleUpload = async (e) => {
    const nombres = await parseUploadedExcel(e.target.files[0]);
    const etiquetasFiltradas = base.filter(item =>
      nombres.includes(item.descripcion?.toUpperCase()?.trim())
    );
    setEtiquetas(etiquetasFiltradas);
  };

  return (
    <div className="App">
      <UploadForm onUpload={handleUpload} layout={layout} setLayout={setLayout} />
      <div className="etiquetas" style={{ "--cols": layout }}>
        {etiquetas.map((item, idx) => <Tag key={idx} item={item} />)}
      </div>
    </div>
  );
};

export default App;
