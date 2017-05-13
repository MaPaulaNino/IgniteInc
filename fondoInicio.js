var imagenes=new Array
(
	'img/1.jpg',
	'img/2.jpg',
	'img/3.jpg',
	'img/4.jpg'
);

function rotarImagenes()
{
	var index=Math.floor((Math.random()*imagenes.length));
	document.getElementById("cuerpo").background=imagenes[index];

}

onload=function()
{
	rotarImagenes();
	setInterval(rotarImagenes,5000);

}

