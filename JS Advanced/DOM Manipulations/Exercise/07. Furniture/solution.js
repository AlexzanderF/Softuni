function solve() {
	const genBtn = document.getElementsByTagName('button')[0];
	const buyBtn = document.getElementsByTagName('button')[1];
	const table = document.getElementsByTagName('tbody')[0];
	const furnitureBox = document.getElementsByTagName('textarea')[0];
	const resultBox = document.getElementsByTagName('textarea')[1];

	genBtn.addEventListener('click', () => {
		let arr = JSON.parse(furnitureBox.value);
		arr.forEach(obj => {
			const tr = document.createElement('tr');
			const imgTD = document.createElement('td');
			const img = document.createElement('img');
			img.src = obj.img;
			imgTD.appendChild(img);
			tr.appendChild(imgTD);
			for (let key in obj) {
				if (key === 'img') {
					continue;
				}
				const td = document.createElement('td');
				const p = document.createElement('p');
				p.textContent = obj[key];
				td.appendChild(p);
				tr.appendChild(td);
			}
			const boxTD = document.createElement('td');
			const checkbox = document.createElement('input');
			checkbox.type = 'checkbox';
			boxTD.appendChild(checkbox);
			tr.appendChild(boxTD);
			table.appendChild(tr);
		});
	});

	buyBtn.addEventListener('click', () => {
		let list = [];
		let totalPrice = 0;
		let decFactor = 0;
		let rows = Array.from(table.children);

		rows.forEach(row => {
			let checkbox = row.lastElementChild.firstElementChild;
			if (checkbox.checked) {
				list.push(row.children[1].textContent);
				totalPrice += Number(row.children[2].textContent);
				decFactor += Number(row.children[3].textContent);
			}
		});
		if (list.length > 0) {
			resultBox.textContent += `Bought furniture: ${list.join(', ')}\n`;
			resultBox.textContent += `Total price: ${totalPrice.toFixed(2)}\n`;
			resultBox.textContent += `Average decoration factor: ${(decFactor / list.length)}`;
		}
	});

}