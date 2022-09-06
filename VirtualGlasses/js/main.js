let dataGlasses = [
  {
    id: "G1",
    src: "./img/g1.jpg",
    virtualImg: "./img/v1.png",
    brand: "Armani Exchange",
    name: "Bamboo wood",
    color: "Brown",
    price: 150,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ea voluptates officiis? ",
  },
  {
    id: "G2",
    src: "./img/g2.jpg",
    virtualImg: "./img/v2.png",
    brand: "Arnette",
    name: "American flag",
    color: "American flag",
    price: 150,
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. In assumenda earum eaque doloremque, tempore distinctio.",
  },
  {
    id: "G3",
    src: "./img/g3.jpg",
    virtualImg: "./img/v3.png",
    brand: "Burberry",
    name: "Belt of Hippolyte",
    color: "Blue",
    price: 100,
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
  },
  {
    id: "G4",
    src: "./img/g4.jpg",
    virtualImg: "./img/v4.png",
    brand: "Coarch",
    name: "Cretan Bull",
    color: "Red",
    price: 100,
    description: "In assumenda earum eaque doloremque, tempore distinctio.",
  },
  {
    id: "G5",
    src: "./img/g5.jpg",
    virtualImg: "./img/v5.png",
    brand: "D&G",
    name: "JOYRIDE",
    color: "Gold",
    price: 180,
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error odio minima sit labore optio officia?",
  },
  {
    id: "G6",
    src: "./img/g6.jpg",
    virtualImg: "./img/v6.png",
    brand: "Polo",
    name: "NATTY ICE",
    color: "Blue, White",
    price: 120,
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
  },
  {
    id: "G7",
    src: "./img/g7.jpg",
    virtualImg: "./img/v7.png",
    brand: "Ralph",
    name: "TORTOISE",
    color: "Black, Yellow",
    price: 120,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim sint nobis incidunt non voluptate quibusdam.",
  },
  {
    id: "G8",
    src: "./img/g8.jpg",
    virtualImg: "./img/v8.png",
    brand: "Polo",
    name: "NATTY ICE",
    color: "Red, Black",
    price: 120,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, unde enim.",
  },
  {
    id: "G9",
    src: "./img/g9.jpg",
    virtualImg: "./img/v9.png",
    brand: "Coarch",
    name: "MIDNIGHT VIXEN REMIX",
    color: "Blue, Black",
    price: 120,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit consequatur soluta ad aut laborum amet.",
  },
];

//lấy ra những sản phẩm

// let glass = dataGlasses.filter((pri) => pri.price === 100);
// console.log(glass);
// let glass2 = dataGlasses.find((pri) => pri.id === "G1");
// console.log(glass2);

// let index = dataGlasses.findIndex((hi) => hi.id === "G6");
// console.log(index);
// console.log(dataGlasses[index]);

// dataGlasses.forEach((sanpham, index) => {
//   console.log(sanpham);
// });

// let mang = dataGlasses.map((sp, i) => {});
// console.log(mang);

// let tongtien = dataGlasses.reduce((tt, sanpham, i) => {
//   return (tt += sanpham.price);
// }, 0);

// console.log(tongtien);

// let render = dataGlasses.reduce((html, sp, i) => {
   
//   return (html += `
//     <div class="col-4 ">
//          <div class="item w-100 p-3 " >
//             <button style=" width:130px ; height:130px ; background-color:#fff " id="${sp.id}" )>
//                 <img src="${sp.src}" alt="" class="w-100">
//             </button>
        
//         </div>
//    </div>
//     `
     
//     );
// }, "");
// console.log(render)
// document.querySelector("#vglassesList").innerHTML = render;




let renderGlass = (arr) => {
  let html = ''
  for(let i in arr ){
    let item = arr[i]

    html += `
    <div class="col-4 ">
           <div class="item w-100 p-3 " >
                <button style=" width:130px ; height:130px ; background-color:#fff " id="show ${item.id}" )>
                   <img src="${item.src}" alt="" class="w-100">
               </button>
            
           </div>
     </div>
    
    
    `
  }
  

  document.querySelector("#vglassesList").innerHTML = html;
  console.log(html)
}

renderGlass(dataGlasses)


document.querySelector('#show').onclick = () =>{
  
}