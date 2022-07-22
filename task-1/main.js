let products = [
    {title:'Apple', weight: 12}, 
    {title:'Chocolate', weight: 43}, 
    {title:'Avocado', weight: 33}, 
    {title:'Milk', weight: 32}, 
    {title:'Bread', weight: 18}, 
    {title:'Cherry', weight: 65}, 
    {title:'Rice', weight: 76}, 
    {title:'Orange', weight: 22}, 
    {title:'Kiwi', weight: 7}
]

let foods = ['Apple', 'Avocado', 'Cherry', 'Orange', 'Kiwi']

let sum = 0

for(let i = 0 ; i < products.length ; i++){
    for(let el of foods){
        if(products[i].title === el){
            sum = sum + products[i].weight
        }
    }
}

console.log(sum);
