const data = [
  { name: "Phone", price: 100 },
  { name: "Laptop", price: 500 },
  { name: "Headphone", price: 50 },
  { name: "Watch", price: 80 }
]

function showProducts(products) {
  const container = document.getElementById('products')
  container.innerHTML = ''

  products.forEach(p => {
    container.innerHTML = `
        <div class = card>
          <h3>${p.name}</h3>
          <h3>${p.price}</h3>
        </div>
      `
  });
}

showProducts(data);

document.getElementById('search').addEventListener("input", (e) => {
  let value = e.target.value.toLowerCase()
  let filtered = data.filter(p => p.name.toLocaleLowerCase().includes(value))
  showProducts(filtered)
})

document.getElementById('sort').addEventListener('input', (e) => {
  let sorted = [...data]
  if (e.target.value === 'high') {
    sorted.sort((a,b) => a.price - b.price);
  }else{
    sorted.sort((a,b) => b.price - a.price);
  }

  showProducts(sorted)
})