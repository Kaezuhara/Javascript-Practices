// Products data

const products = [
  {
    id: 1,
    image: "https://image.uniqlo.com/UQ/ST3/ph/imagesgoods/465185/sub/phgoods_465185_sub17_3x4.jpg?width=600",
    title: "AIRism Crewneck T-shirt UNIQLO"
  },
  {
    id: 2,
    image: "https://www.uniqlo.com/jp/ja/contents/feature/masterpiece/common/img/product/item_03_kv.jpg?260115",
    title: "Cotton Oversized Shirt UNIQLO"
  },
  {
    id: 3,
    image: "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/477181/sub/goods_477181_sub14_3x4.jpg?width=600",
    title: "Linen Polo Short Sleeve"
  }
];



// Load products to HTML

let productsHTML = '';

products.forEach((product) => {
  productsHTML += `
    <div class="productCont">
      <img src="${product.image}">
      <div class="lowerCont">
        <p class="productName">${product.title}</p>
        <p class="added added-${product.id}">Added!</p>
        <button class="${product.id}" data-product-id="${product.id}">Add to Cart</button>
      </div>
    </div>
  `;
});

document.querySelector('.content').innerHTML = productsHTML;



// 'Added' notification

const addedVisibleTimers = {};

document.querySelectorAll('button').forEach((btn) => {
  btn.addEventListener('click', () => {
    const { productId } = btn.dataset;
    const addBtn = document.querySelector(`.added-${productId}`);

    addBtn.classList.add('added-visible');

    clearTimeout(addedVisibleTimers[productId]);

    addedVisibleTimers[productId] = setTimeout(() => {
      addBtn.classList.remove('added-visible');
    }, 3000);
  });
});