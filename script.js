const tUbahWarna = document.getElementById('tUbahWarna');
tUbahWarna.onclick= function(){
    alert('OK');
}

tUbahWarna.onclick= function(){
    document.body.style.backgroundColor = 'lightgreen';
    document.body.setAttribute('class', 'hijau-muda');
    document.body.classList.toggle('hijau-muda');
}

const tAcakWarna = document.createElement('button');
const teksTombol = document.createTextNode('Acak Warna');
tAcakWarna.appendChild(teksTombol);
tAcakWarna.setAttribute('type', 'button');
tUbahWarna.after(tAcakWarna);

tAcakWarna.addEventListener('click', function(){
    const r = Math.round(Math.random) * 255 + 1;
    console.log(r);
    document.body.style.backgroundColor = 'rgb('+ r +',0,0)';
})

tAcakWarna.addEventListener('click', function(){
    const r = Math.round(Math.random() * 255 + 1);
    const g = Math.round(Math.random() * 255 + 1);
    const b = Math.round(Math.random() * 255 + 1);
    document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')';

})
 
// const sliderMerah = document.querySelector('input[name=sliderMerah]');

// sliderMerah.addEventListener('change', function(){
//     alert('OK');
// })



// sliderMerah.addEventListener('change', function(){
//     console.log(sliderMerah.value);
// })


// const sliderMerah = document.querySelector('input[name=sliderMerah]');
// sliderMerah.addEventListener('change', function(){
//     const r = sliderMerah.value;
//     document.body.style.backgroundColor = 'rgb('+ r +', 100, 100)';
// })

// const sliderMerah = document.querySelector('input[name=sliderMerah]');
// const sliderHijau = document.querySelector('input[name=sliderHijau');
// const sliderBiru = document.querySelector('input[name=sliderBiru');

// sliderMerah.addEventListener('input', function(){
//     const r = sliderMerah.value;
//     const g = sliderHijau.value;
//     const b = sliderBiru.value;
//     document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b + ')'; 
// })

// sliderHijau.addEventListener('input', function(){
//     const r = sliderMerah.value;
//     const g = sliderHijau.value;
//     const b = sliderBiru.value;
//     document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b + ')'; 
// })

// sliderBiru.addEventListener('input', function(){
//     const r = sliderMerah.value;
//     const g = sliderHijau.value;
//     const b = sliderBiru.value;
//     document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b + ')';   
// })

//studi kasus 3
const sliderMerah = document.querySelector('input[name=sliderMerah]');
const sliderHijau = document.querySelector('input[name=sliderHijau]');
const sliderBiru = document.querySelector('input[name=sliderBiru]');

sliderMerah.addEventListener('input', function(){
    const r = sliderMerah.value;
    const g = sliderHijau.value;
    const b = sliderBiru.value;
    document.body.style.backgroundColor = 'rgb('+ r +', '+ g +', '+ b +')';
})

sliderHijau.addEventListener('input', function(){
    const r = sliderMerah.value;
    const g = sliderHijau.value;
    const b = sliderBiru.value;
    document.body.style.backgroundColor = 'rgb('+ r +', '+ g +', '+ b +')';
})

sliderBiru.addEventListener('input', function(){
    const r = sliderMerah.value;
    const g = sliderHijau.value;
    const b = sliderBiru.value;
    document.body.style.backgroundColor = 'rgb('+ r +', '+ g +', '+ b +')';
})

// document.body.addEventListener('mousemove', function(event){
//     // console.log(event.clientX);
//     // console.log(window.innerWidth);

//     const xPos = Math.round(event.clientX / window.innerWidth) * 255);
//     console.log(xPos);
//     const yPos = Math.round(event.clientX / window.innerWidth) * 255);
//     console.log(xPos);

//     document.body.style.backgroundColor = 'rgb('+ xPos +','+ yPos +','100)';
// });