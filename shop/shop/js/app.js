(function() {
  "use strict";

  var productCustomizer = new Vue ({
      el: '#vue-root',
      data:
              {
                  sizes : window.Inventory.allSizes,
                  selectedSize :  9
              },
             computed: {
                 sizeClass : function(){
                    return 'product-size--' + 
                           this.selectedSize.toString().replace('.','_') ;
                 }
             }
      
  });

})();
