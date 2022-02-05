import react from "react"
import image1 from  '../../assets/imgs/GodOfWar.jpg'
import image2 from  '../../assets/imgs/minecraft.jpg'
import image3 from  '../../assets/imgs/RedRedemption.jpg'
import image4 from  '../../assets/imgs/Resident8.jpg'
import logo from '../../assets/imgs/logoPlay.png'

const products = [
    {id: 1,img:image1,title: 'God Of War ' ,description:'+18',price:7000, console:logo,},
    {id: 2,img:image2,title: 'Minecraft' ,description:'+18',price:8500, console:logo,},
    {id: 3,img:image3,title: 'Resdiden Evil Village',description:'+13',price:4500, console:logo,},
    {id: 4,img:image4,title: 'Red Dead Redemption 2 ',description:'+18',price:10000, console:logo,},

]

const promesa = new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log(products)
        resolve(products) 
    },2000)

})

function getProducts(){
    return promesa;
}

export{
    getProducts,
}