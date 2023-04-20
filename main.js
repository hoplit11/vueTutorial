const app = Vue.createApp({
    data() {
        return {
            cart:0,
            product: 'Socks',
            brand: 'Vue Mastery',
            /*image: './assets/images/socks_green.jpg'  video 8 Vue mastery Vue */
            selectedVariant:0 , /*is goint to be update with the index of the variant tha is hover on(@mouseover="updateVariant(index)") */
            attribute: 'https://www.google.com/?hl=es',
            description: 'This socks are very good',
            /*inStock: true _ is going to be a computer property_video 8 Vue mastery Vue   */
            inventory: 0 ,
            onSale: true,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
                { id: 2234, color: 'green', image: './assets/images/socks_green.jpg', quantity: 50},
                { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: 0},
            ],
            sizes:['S', 'M', 'L', 'XL'],
            
        }
    },

    methods: {
        addToCart() { // whe is call this method changes the value of the cart property in data
            this.cart +=1  
        },
        delToCart() { //
            this.cart -=1  
        },       
        //
        updateVariant(index) { // is changed from  updateImage(variantImage) to updateVariant(variantImage)
            this.selectedVariant = index //  is changed from  "this.image= variantImage"to "this.selectedVariant = index"
            console.log(index) //testing
        }
    },

    computed:{
        title() {
            return this.brand + ' ' + this.product
        },
        image() {
            return this.variants[this.selectedVariant].image
        },
        inStock() {
            return this.variants[this.selectedVariant].quantity
        },
        
        OnSaleTitle() {
            return this.brand + ' ' + this.product + ' is on sale.'
        }
        
    }
    

})

