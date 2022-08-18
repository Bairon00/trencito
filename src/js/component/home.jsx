import { array, number } from "prop-types";
import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import azul from "../../img/azul.jpg";
import rojo from "../../img/rojo.png";
import verde from "../../img/verde.jpg";
import tren from "../../img/tren.jpg";
import via from "../../img/via.png";
//create your first component
const Home = () => {
const[Suma,setSuma]=useState([])
const list =[rojo,azul,verde]
const randomimg=()=>{return(<img src={list[Suma]}/>)}
const tareas =(e)=>{e.preventDefault();}



	



	return (
		<div className="text-center ">
			
			<div><img className="tamaño2" src={tren}  onClick={() => {
				if(Suma.length<=12)
				{setSuma([...Suma, Math.floor(Math.random() * list.length)])}
				}}/>{Suma.map((e,i)=>{return  <img className="tamaño3" key={i} src={list[e]}/>})}</div>
			<div><img className="tamaño1" src={via}/><img className="tamaño1" src={via}/><img className="tamaño1" src={via}/><img className="tamaño1" src={via}/><img className="tamaño1" src={via}/><img className="tamaño1" src={via}/><img className="tamaño1" src={via}/><img className="tamaño1" src={via}/><img className="tamaño1" src={via}/><img className="tamaño1" src={via}/><img className="tamaño1" src={via}/><img className="tamaño1" src={via}/><img className="tamaño1" src={via}/></div>
		</div>
	);
};


export default Home;
