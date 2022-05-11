// let json_data = {

//     "fb-001": {
//         "type": "olive-oil",
//         "status": "New",
//         "src": "faciolla-brothers/imgs/IMG_4950.jpg",
//         "name": "Organic Extra Virgin Olive Oil",
//         "price": 27
//     },

//     "fb-002": {
//         "type": "christmas-package",
//         "status": "Sold Out",
//         "src": "faciolla-brothers/imgs/christmas_package.jpg",
//         "name": "Facciolla Christmas Package",
//         "price": 55
//     },

//     "fb-003": {
//         "type": "special-package",
//         "status": "Special",
//         "src": "faciolla-brothers/images/IMG_9190.jpg",
//         "name": "Pancellote",
//         "price": 55,
//         "link": "products/special_package.html"
//     },


//     "fb-004": {
//         "type": "pasta",
//         "status": "New",
//         "src": "faciolla-brothers/images/IMG_9181.jpg",
//         "name": "Pancellote",
//         "price": 55
//     },

//     "fb-005": {
//         "type": "pasta",
//         "status": "New",
//         "src": "faciolla-brothers/images/IMG_9182.jpg",
//         "name": "Pancellote",
//         "price": 55
//     },

//     "fb-007": {
//         "type": "pasta",
//         "status": "New",
//         "src": "faciolla-brothers/images/IMG_9184.jpg",
//         "name": "Pancellote",
//         "price": 55
//     },

//     "fb-008": {
//         "type": "pasta",
//         "status": "New",
//         "src": "faciolla-brothers/images/IMG_9187.jpg",
//         "name": "Orecchiette",
//         "price": 55,
//         "link": "products/orecchiette.html",
//         "extra_src": ["faciolla-brothers/images/IMG_9183.jpg"]
//     },
    
//     "fb-009": {
//         "type": "pasta",
//         "status": "New",
//         "src": "faciolla-brothers/images/IMG_9188.jpg",
//         "name": "Pancellote",
//         "price": 55
//     }
// }

let json_data = {};
$.getJSON("products/products.json", function(json) {
    json_data = json; // this will show the info it in firebug console
}).then(function() {
  let d_ = "";
  for (const i of Object.keys(json_data)) {
  
      console.log(i);
  
      var d__ = "";
        console.log(i.toLowerCase().indexOf("hide"));
      if (json_data[i]["status"] == "Sold Out" || i.toLowerCase().indexOf("hide") != -1) {
        //don't do anything
        console.log("Hide");
      } else {
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
  }
  
  // <ul>
  //     <li><a href="#" data-toggle="tooltip" data-placement="right" title="View"><i class="fas fa-eye"></i></a></li>
  //     <li><a href="#" data-toggle="tooltip" data-placement="right" title="Compare"><i class="fas fa-sync-alt"></i></a></li>
  //     <li><a href="#" data-toggle="tooltip" data-placement="right" title="Add to Wishlist"><i class="far fa-heart"></i></a></li>
  // </ul>
  
  //<a class="cart" onclick="SaveItem('` + i  + `', '1')">Add to Cart</a>
  
  
  document.getElementById("special-list").innerHTML = d_;
});
