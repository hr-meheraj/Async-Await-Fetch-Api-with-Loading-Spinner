console.clear();
const h2 = document.querySelector("h2");
const getData = (_) => {
	h2.style.display = "block";
	const url = "https://jsonplaceholder.typicode.com/users";
	const func = async (_) => {
		const res = await fetch(url);
		const data = await res.json();
		return data;
	};

	const move = func();
	move
		.then((each) => {
			if (each.length >= 10) {
				each.map((eachData) => {
					const container = document.querySelector(".container");
					const h1 = document.createElement("h1");
					h1.innerHTML = eachData.name;
					container.appendChild(h1);
					h2.style.display = "none";
				});
			} else {
				console.log("Every data lesson than");
			}
		})
		.catch((err) => console.log("It's may be error occured..", err.message));
};
