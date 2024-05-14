async function products(){
    let products=""
 try {
    let data= await fetch("https://6640683da7500fcf1a9db339.mockapi.io/prouducts")
    let res= await data.json()
    products=res.map((elem)=>{
        return `  <div class="w-full">
        <h3>title:${elem.title}</h3>
        <p class="text-">description:${elem.description}</p>
        <img src=${elem.image} class=" w-2/3" alt="">
        <div class="flex justify-between">
          <p>price:${elem.price}</p>
          <p>rate:${elem.rate}</p>

        </div>
      </div>`
    })
    document.querySelector(".products").insertAdjacentHTML("afterbegin",products.join(""))
 } catch (error) {
    console.log(error.message);
 }
}
export default products;