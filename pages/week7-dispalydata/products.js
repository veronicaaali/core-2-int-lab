
fetch("products.json")
.then(function(response){
	return response.json();
})
.then(function(products){
	let placeholder = document.querySelector("#container");
	let out = "";
	for(let product of products){
    out+= `
    <div class="icon travel">
    <div class="card" style="background:${rgb()}">
      <div class="emoji"><img src="${product.image}"></div>
      <div class="category">${product.name || '-'}</div>
      <div class="description">${product.inventory || '-'}</div>
      <div class="year">${product.productCode}</div>
    </div>
    </div>`
	}

	placeholder.innerHTML = out;
});
  function rgb() {
    const r = Math.floor(Math.random() * 256)
    const g = Math.floor(Math.random() * 256)
    const b = Math.floor(Math.random() * 256)
    return `rgb(${r},${g},${b},.5)`
  }