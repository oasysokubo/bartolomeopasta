let json_data = {

    "fb-001": {
        "type": "olive-oil",
        "status": "New",
        "src": "faciolla-brothers/imgs/IMG_4950.jpg",
        "name": "Organic Extra Virgin Olive Oil",
        "price": 27
    },

    "fb-002": {
        "type": "christmas-package",
        "status": "Sold Out",
        "src": "faciolla-brothers/imgs/christmas_package.jpg",
        "name": "Facciolla Christmas Package",
        "price": 55
    },

    "fb-003": {
        "type": "special-package",
        "status": "Special",
        "src": "faciolla-brothers/images/IMG_9190.jpg",
        "name": "Pancellote",
        "price": 55,
        "link": "products/special_package.html"
    },


    "fb-004": {
        "type": "pasta",
        "status": "New",
        "src": "faciolla-brothers/images/IMG_9181.jpg",
        "name": "Pancellote",
        "price": 55
    },

    "fb-005": {
        "type": "pasta",
        "status": "New",
        "src": "faciolla-brothers/images/IMG_9182.jpg",
        "name": "Pancellote",
        "price": 55
    },

    "fb-007": {
        "type": "pasta",
        "status": "New",
        "src": "faciolla-brothers/images/IMG_9184.jpg",
        "name": "Pancellote",
        "price": 55
    },

    "fb-008": {
        "type": "pasta",
        "status": "New",
        "src": "faciolla-brothers/images/IMG_9187.jpg",
        "name": "Orecchiette",
        "price": 55,
        "link": "products/orecchiette.html"
    },
    
    "fb-009": {
        "type": "pasta",
        "status": "New",
        "src": "faciolla-brothers/images/IMG_9188.jpg",
        "name": "Pancellote",
        "price": 55
    },
}


let d_ = "";
for (const i of Object.keys(json_data)) {

    console.log(i);

    var d__ = "";

    if (json_data[i]["status"] != "Sold Out") {
        // if (i === "fb-001") {
        //     d__ = `
        //     <div class="mask-icon">
        //     <form target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post" >
        //     <input type="hidden" name="cmd" value="_s-xclick">
        //     <input type="hidden" name="encrypted" value="-----BEGIN PKCS7-----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-----END PKCS7-----">
        //     <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_cart_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" style="position: absolute; left: 0; bottom: 0;">
        //     <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">
        //     </form>
        //     </div>
    
        //     `;
        // }
    
        // if (i === "fb-002") {
        //     d__ = `
        //     <div class="mask-icon">
        //     <form target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post" >
        //     <input type="hidden" name="cmd" value="_s-xclick">
        //     <input type="hidden" name="encrypted" value="-----BEGIN PKCS7-----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-----END PKCS7-----">
        //     <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_cart_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" style="position: absolute; left: 0; bottom: 0;">
        //     <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">
        //     </form>
        //     </div>
        //     `;
        // }
    }

    

    d_ += `
        <a href="` + json_data[i]["link"] +`">
        <div class="col-lg-3 col-md-6 special-grid ` + json_data[i]["type"] + `">
            <div class="products-single fix">
                <div class="box-img-hover">
                    <div class="type-lb">
                        <p class="new">` + json_data[i]["status"] + `</p>
                    </div>
                    <img src="` + json_data[i]["src"] + `" class="img-fluid" alt="Image">
                    
                        
                        
                        ` + d__ + `
                    
                </div>
                <div class="why-text">
                    <h4>` + json_data[i]["name"] + `</h4>
                    <h5>$` + json_data[i]["price"] + `</h5>
                </div>
            </div>
        </div>
        </a>

    `;
}

// <ul>
//     <li><a href="#" data-toggle="tooltip" data-placement="right" title="View"><i class="fas fa-eye"></i></a></li>
//     <li><a href="#" data-toggle="tooltip" data-placement="right" title="Compare"><i class="fas fa-sync-alt"></i></a></li>
//     <li><a href="#" data-toggle="tooltip" data-placement="right" title="Add to Wishlist"><i class="far fa-heart"></i></a></li>
// </ul>

//<a class="cart" onclick="SaveItem('` + i  + `', '1')">Add to Cart</a>


document.getElementById("special-list").innerHTML = d_;