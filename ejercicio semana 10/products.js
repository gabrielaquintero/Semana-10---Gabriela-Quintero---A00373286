import products from "./index.js";

let list = []

list = products

console.log(list);
class ProductItem extends HTMLElement {
    constructor() {
      super();
      }
      
      
      
      connectedCallback(){
        this.newProduct = this.getAttribute('newProduct')
        this.product()
    }
    
    static get observedAttributes() {
        return ['newProduct'];
    }
    
    attributeChangedCallback(name, oldValue, newValue){
        this.newProduct = newValue;
        console.log(this.newProduct);
        this.product()
        
    }
    

    product() {
    
        list.forEach(item =>{
            this.innerHTML += `
            <div class="card" style="width: 18rem;">
   <img src="..." class="card-img-top" alt="...">
   <div class="card-body">
     <h5 class="card-title">${item.name}</h5>
     <p class="card-text">${item.price}</p>
     <a href="#" class="btn btn-primary">Go somewhere</a>
   </div>
 </div>
         `
        })
        
        
    }

}
    


  
  customElements.define("product-item", ProductItem);