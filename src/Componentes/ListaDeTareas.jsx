import React, { useState } from "react";
import Formulario from "./Formulario";
import Tarea from "./Tarea";
import "../Estilos/ListaDeTareas.css";

function ListaDeTareas() {
  const [tareas, setTareas] = useState([]);

  const agregarTarea = (tarea) => {
    if (tarea.texto.trim()) {
      tarea.text = tarea.texto.trim();
      const tareaActualizada = [tarea, ...tareas];
      setTareas(tareaActualizada);
    }
  };

  const eliminarTarea = (id) => {
    const tareaActualizada = tareas.filter((tarea) => tarea.id !== id);
    setTareas(tareaActualizada);
  };

  const completarTarea = (id) => {
    const tareaActualizada = tareas.map((tarea) => {
      if (tarea.id === id) {
        tarea.completada = !tarea.completada;
      }
      return tarea;
    });
    setTareas(tareaActualizada);
  };

  return (
    <>
      <Formulario onSubmit={agregarTarea} />
      <div className="tareas-contenedor">
        {tareas.map((tareas) => (
          <Tarea
            key={tareas.id}
            id={tareas.id}
            texto={tareas.texto}
            completada={tareas.completada}
            completarTarea={completarTarea}
            eliminarTarea={eliminarTarea}
          />
        ))}
      </div>
    </>
  );
}

export default ListaDeTareas;
