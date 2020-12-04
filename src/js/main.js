$(function () {
    let itemNull = $(".basket-top .no-item");
    let itemBlock = $(".basket-top .has-item");
    let productList = $(".mini_products_list");
    // let product = $(".mini_products_list .item");
    let addToCard = $(".shop-side .add-to-card");
    let productText = $(".product-detail h2");
    let productMoney = $(".product-left span");
    let photos = $(".reveal .images");
    let total = $(".total_side .total .price");
    // Span value
    let detail = $(".detail span");
    let detailPlus = 0;

    for (let i = 0; i < addToCard.length; i++) {
        addToCard[i].onclick = function () {

            // Span Value
            detailPlus += 1;
            detail.html(detailPlus);

            // Basket css Side
            $(".basket-top").css({
                "padding": "0"
            });
            itemNull.addClass("shop_none");
            itemBlock.addClass("shop_block");

            // Basket Product Side
            productList.append(`
                <li class="item float-left d-flex justify-content-around w-100">
                    <a class="product_image" href="#">
                        <img class="img-fluid" src="${photos[i].src}" alt="">
                    </a>
        
                    <div class="product-details d-flex flex-column justify-content-start align-items-center">
                        <p class="product-name text-left">
                            <a href="#">
                                ${productText[i].innerText} - 1kq <br> Brown
                            </a>
                        </p>
        
                        <div class="cart-collateral text-left w-100">
                            1 x
                            <span>
                                £${productMoney[i].innerText.slice(1)}
                            </span>
                        </div>
                    </div>
        
                    <div class="close">
                        <i class="fas fa-times"></i>
                    </div>
                </li>
            `);

            // Cart Total
            total.html(productMoney[i].innerText);

            // Close Button
            let prodDel = $(".item .close i");
            for (let j = 0; j < prodDel.length; j++) {
                prodDel[j].addEventListener('click', prodDelete);
            };
        };

        // Close Button
        function prodDelete() {
            $(this).parent().parent().remove();

            // Span Value
            detailPlus -= 1;
            detail.html(detailPlus);
        };
    };
});