window.onload = function()
{

	var canvas = document.getElementById("lienzo");
	var ctx = canvas.getContext("2d");

	var W = window.innerWidth;
	var H = window.innerHeight;
	canvas.width = W;
	canvas.height = H;

	var dl = 100;
	var flks = [];

	for (var i=0; i < dl; i++)
	{

		flks.push({
			x: Math.random()*W,
			y: Math.random()*H,
			r: Math.random()*5+2,
			d: Math.random() * 1
		})

	}

	function drawFlakes()
	{

		ctx.clearRect(0, 0, W, H);
		ctx.fillStyle = "white";
		ctx.beginPath();
		for(var i = 0; i < dl; i++)
		{

			var f = flks[i];
			ctx.moveTo(f.x, f.y);
			ctx.arc(f.x, f.y, f.r, 0, Math.PI*2, true);

		}
		ctx.fill();
		moveFlakes();

	}

	var angle = 0;
	function moveFlakes()
	{
		angle *= 0.01;
		for(var i; i < dl; i++)
		{
			var f = flks[i];

			f.y += Math.pow(f.d, 2) + 1;
			f.x += Math.sin(angle) * 2;

			if(f.y > H)
			{
				flks[i] = {x: Math.random()*W, y: 0, r: f.r, d: f.d};
			}
		}
	}

	setInterval(drawFlake, 25);
}