import React, { Fragment, useRef} from "react";
import ReactDOM from "react-dom";
import { TodoItem } from "./TodoItem";
import {v4 as uuid} from "uuid";

export function TodoList(){

        //const [todos, setTodos] = useState([
        //{id:1, img:"Img 1"}, {id:2, img:"Img 2"},
        //{id:3, img:"Img 3"}, {id:4, img:"Img 4"}
    

    //para capturar el contenido que se agrege se debe importat el useRef arriba.
    //const imgRef = useRef(); 

    //se debe instalar uuid
    //const agregarImg = () =>{
        //alert("agragando imagen");
        //const img = imgRef.current.value;
        //alert(imagen)
        //const id = uuid();
        //alert(id)

        //esto para que no agrege tareas en blanco
        //if(img === "")
        //return;

        //setTodos ((prevTodos) => {const nuevaImg = {id : uuid,img : img}
        //para que se limpie el imput
        //imgRef.current.value = "";
        //los ... son para descomponer el arreglo con el return toma el arreglo y le agrega la nueva tarea, mostrandolo actualizado
        //return [...prevTodos, nuevaImg]})

    
    return (
        <Fragment>
            <h1 class="text-center">Mi Album</h1>
            <br/>
            <div className="input-group mt-4 mb-4">
                <input  placeholder="Ingrese un titulo" className="form-control" type="text" ></input>
                <button className="btn btn-success ms-2">+</button>
            </div>

            <TodoItem></TodoItem>
            

        </Fragment>
    )
}