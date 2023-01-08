let foods = [
    {
        name: 'Pho',
        title: 'Day la mon an co truyen cua Ha Noi va Viet Nam',
        des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis repudiandae eaque consectetur voluptates amet rem cum commodi distinctio iure? Animi nulla repellat hic? Voluptatum totam iusto eaque deleniti officiis nemo?',
        img: './Imagine/item-picture1.webp'
    },
    {
        name: 'Bun rieu',
        title: 'Day la mon an tuyet voi va rat thich hop de di an voi nguoi yeu',
        des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis repudiandae eaque consectetur voluptates amet rem cum commodi distinctio iure? Animi nulla repellat hic? Voluptatum totam iusto eaque deleniti officiis nemo?',
        img: './Imagine/item-picture1.webp'
    },
    {
        name: 'Banh da cua',
        title: 'Day la mot mon sieu ngon cua HaiPhong',
        des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis repudiandae eaque consectetur voluptates amet rem cum commodi distinctio iure? Animi nulla repellat hic? Voluptatum totam iusto eaque deleniti officiis nemo?',
        img: './Imagine/item-picture1.webp'
    },
    {
        name: 'Bun bo Hue',
        title: 'Mon ngon cua Hue',
        des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis repudiandae eaque consectetur voluptates amet rem cum commodi distinctio iure? Animi nulla repellat hic? Voluptatum totam iusto eaque deleniti officiis nemo?',
        img: './Imagine/item-picture1.webp'
    },
    {
        name: 'Banh bot loc',
        title: 'Mon ngon dac san cua Hue',
        des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis repudiandae eaque consectetur voluptates amet rem cum commodi distinctio iure? Animi nulla repellat hic? Voluptatum totam iusto eaque deleniti officiis nemo?',
        img: './Imagine/item-picture1.webp'
    },
    {
        name: 'Bun oc ',
        title: 'Mot mon ngon va dinh cao vao mua dong',
        des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis repudiandae eaque consectetur voluptates amet rem cum commodi distinctio iure? Animi nulla repellat hic? Voluptatum totam iusto eaque deleniti officiis nemo?',
        img: './Imagine/item-picture1.webp'
    },
]

// -------------- local Storage done -------------- 
// Chạy đoạn code này trước để khởi tạo Local Storage 

localStorage.setItem('products',JSON.stringify(foods)) 

let productsData = localStorage.getItem('products')
let getfoods = JSON.parse(productsData)
console.log(getfoods)
// -------------- -------------- --------------------

let items = document.querySelector('.items')
// let a = document.getElementsByClassName('.item')
console.log(items);
// console.log(a);
for (product of getfoods){
    items.innerHTML +=
     `
    <div class="item">
        <div class="product-view">
            <img class="img-icon" src=${product.img} alt="">
            <button type="button"
                value='${product.name}' >add to list</button>
        </div>
        <div class="content">
            <h3>${product.name}</h3>
            <p> 
                ${product.title}
            </p> 
        </div>
    </div>
    `
}
// let pro = JSON.stringify(products)
// localStorage.setItem('productsCart', pro)

let item = document.querySelector('.items')
console.log(item);
let cart = document.querySelector('.container-right')
let order = []

item.addEventListener('click', function (event){
    console.log(event);
    if(event.srcElement.tagName === 'BUTTON'){
        console.dir(event.srcElement);
        let item = event.srcElement.value
        console.log('item', item)
        order.push(`${item}`)
        localStorage.setItem('order_list', JSON.stringify(order))
        cart.innerHTML += `<p>${item}</p>`
    }
})

