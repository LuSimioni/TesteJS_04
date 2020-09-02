const skusArray = [];
const produtos = document.getElementById("produtos").children;



for (let i = 0; i < produtos.length; i++) {
  const sku = produtos[i].dataset.sku;
  const name = produtos[i].querySelector(".name").innerText;
  const price = produtos[i].querySelector(".price").innerText;
  skusArray.push(sku);

  produtos[i].addEventListener('click', function(){
    let skuObjeto = {
      name : name,
      price : price,
      sku : sku,
    };
    console.log(skuObjeto);
  })
}

console.log(skusArray);
