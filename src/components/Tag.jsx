import React from "react";
import "./Tag.css";

const Tag = ({ item }) => (
  <div className="tag">
    <h3>{item.codigo}</h3>
    <div>{item.descripcion}</div>
    <div className="barcode">*{item.codigo_barras}*</div>
    <div className="precios">
      <div>
        <div>1</div>
        <div>3</div>
        <div>600</div>
      </div>
      <div>
        <div>${item.precio_menudeo}</div>
        <div>${item.precio_mayoreo}</div>
        <div>${item.precio_caja}</div>
      </div>
    </div>
    <div className="socio">
      SOCIO GPM<br />
      <small>8% MENOS en precio mayoreo<br />Compra mínima: $1,000 por ticket</small><br />
      <strong>${item.precio_socio}</strong>
    </div>
  </div>
);

export default Tag;
