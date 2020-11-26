$(function () {

    let itemNull = $(".no-item");
    let itemBlock = $(".basket-top .has-item");
    let productList = $(".mini_products_list");
    let addToCard = $(".shop-side .add-to-card");
    let productText = $(".product-detail h2");
    let productMoney = $(".product-left span");
    let photos = $(".reveal .images");
    // let detail = $("#plus");

    for (let i = 0; i < addToCard.length; i++) {
        addToCard[i].onclick = function () {

            $(".basket-top").css({
                "padding": "0"
            });
            itemNull.addClass("shop_none");
            itemBlock.addClass("shop_block");

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
                                ${productMoney[i].innerText}
                            </span>
                        </div>
                    </div>
        
                    <div class="close">
                        <i class="fas fa-times"></i>
                    </div>
                </li>
            `);

            // Close Button
            let prodDel = $(".item .close i");
            for (let j = 0; j < prodDel.length; j++) {
                prodDel[j].addEventListener('click', prodDelete);
            };
        };

        // Close Button
        function prodDelete() {
            $(this).parent().parent().remove();

            // if (productList.value() != null) {
            //     itemNull.addClass("shop_block");
            //     itemBlock.removeClass("shop_block");

            //     $(".basket-top").css({
            //         "padding": "20px 20px"
            //     });

            // } else {
            //     itemNull.removeClass("shop_block");
            //     itemBlock.addClass("shop_block");

            //     $(".basket-top").css({
            //         "padding": "0"
            //     });
            // }
        };
    };
});