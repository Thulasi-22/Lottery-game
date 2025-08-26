
        const l=document.getElementById('lottery')
        const b=document.getElementById('pick')
        const result=document.getElementById('result')
        const audio=new Audio('mixkit-completion-of-a-level-2063 (1).wav')
        gifts=[
            '₹500 cash',
            'Toy car', 
            'Headphones',
            'purfume',
            'Laptop bag',
            'watch',
            'Smartphone cover',
            'gift voucher',
            'key chain',
            'shopping',
            '₹2000 cash',
            'Gift hamper',
            'lamp',
            'notebooks',
            'wireless mouse',
            'cooler',
            'portable charger',
            'cooking set',
            'chocolate box',
            'teddy bear',
            'sports kit',
            'digital clock',
            'movie ticket',
            'Toy robot',
            'specticles',
        ]
        gifts.forEach(function(value,i){
         const element=`<div class="box" id=${i+1} >${i+1}. ${value} </div>`
            console.log(element)
            l.insertAdjacentHTML("beforeend",element)
        })
       b.addEventListener('click',function(){
         result.textContent="Please wait..."
        for(let i=1;i<=25;i++){
            document.getElementById(i).classList.remove('color')
        }
        setTimeout(function(){
           const random=Math.floor(Math.random()*25)+1
          const gift=gifts[random-1]
          result.textContent=`You have got ${random}, and you won ${gift}.`
          document.getElementById(random).classList.add('color')
          audio.play()
        },5000)
       })