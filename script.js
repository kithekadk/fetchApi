// let promise = new Promise(function(res, rej){

//     setTimeout(() => {
//         // resolve("completed")
//         console.log("completed");
//     }, 0);

//     console.log("something");
// })
let products = document.querySelector('.products')

let stock = []
// Promises
// function fetchProducts(){
//     let response = new Promise(async (resolve,reject)=>{
//         try {
//             let res =await fetch('https://dummyjson.com/products')
//             const data = await res.json()
//             resolve(data)
//         } catch (error) {
//             reject('Error fetch products:', error)
//         }
//     })

//     return response
// }

function fetchProducts(callback){
    fetch('https://dummyjson.com/products')
    .then(response => response.json())
    .then(data=>callback(null, data))
    .catch(error =>{
        return callback('Error fetching products:', error)
    });
}

// fetchProducts()

function processData(){
    // data = await fetchProducts()
    // console.log(data.products);
    // stock = data.products

    // callbacks
    fetchProducts((error, data)=>{
        if(error){
            console.log(error);
            return;
        }
    stock = data.products
    console.log(stock);

    stock.forEach((product,index)=>{
        let item = document.createElement("div")
        item.className="product"

        let image = document.createElement('img')
        image.setAttribute('src', product.images[0])

        let title = document.createElement('div')
        title.className="title"
        title.textContent = product.title

        let price = document.createElement('div')
        price.className="price"
        price.textContent = `Ksh. ${product.price}`

        let viewbtn = document.createElement('button')
        viewbtn.textContent = "View Item"
        viewbtn.addEventListener('click', ()=>{
            window.location.href = `product.html?id=${index+1}`
        })

        item.appendChild(image)
        item.appendChild(title)
        item.appendChild(price)
        item.appendChild(viewbtn)

        products.appendChild(item)
    })


})}

processData()