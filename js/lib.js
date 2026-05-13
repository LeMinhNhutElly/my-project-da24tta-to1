const list=[
    {id: 1, name: "Hoa Mai", price: "150k/2 Chậu", img: "../assets/images/hoamai.jpg"},
    {id: 2, name: "Hoa Đào", price: "500k/Cành", img: "../assets/images/hoadao.jpg"},
    {id: 3, name: "Hoa Hồng", price: "200k/Bó", img: "../assets/images/hoahong.jpg"},
    {id: 4, name: "Hoa Lan", price: "300k/Giỏ", img: "../assets/images/hoalan.jpg"}

];
function add(){
const myDiv = document.createElement("div");
for(let i= 0;i<list.length;i++)
{
    const d = document.createElement("d");
    const img = document.createElement("img");
    img.src = list[i].img;
    img.width = 300;
    const p = document.createElement("p");
    p.innerText = `${list[i].id} ${list[i].name} ${list[i].price}`;
    d.appendChild(img);
    d.appendChild(p);

    myDiv.appendChild(d);
}
document.body.appendChild(myDiv);
}
/* ﻿function add(){
    const Divboss = document.createElement("div");
    const img = document.createElement("img");
    img.src = "../assets/images/hoadao.jpg";
    img.width = 300;
    Divboss.appendChild(img)
    const Div2 = document.createElement("div");
    const para = document.createElement("p");
	const textp = document.createTextNode("Hoa Đào");
	para.appendChild(textp);
	Div2.appendChild(para);
	const para1 = document.createElement("p");
	const textp1 = document.createTextNode("500k/Cành");
	para1.appendChild(textp1);
	Div2.appendChild(para1);
    Divboss.appendChild(Div2);

    const Divboss = document.createElement("div");
    const img = document.createElement("img");
    img.src = "../assets/images/hoadao.jpg";
    img.width = 300;
    Divboss.appendChild(img)
    const Div2 = document.createElement("div");
    const para = document.createElement("p");
	const textp = document.createTextNode("Hoa Hồng");
	para.appendChild(textp);
	Div2.appendChild(para);
	const para1 = document.createElement("p");
	const textp1 = document.createTextNode("200k/Bó");
	para1.appendChild(textp1);
	Div2.appendChild(para1);
    Divboss.appendChild(Div2);

    const Divboss = document.createElement("div");
    const img = document.createElement("img");
    img.src = "../assets/images/hoadao.jpg";
    img.width = 300;
    Divboss.appendChild(img)
    const Div2 = document.createElement("div");
    const para = document.createElement("p");
	const textp = document.createTextNode("Hoa Đào");
	para.appendChild(textp);
	Div2.appendChild(para);
	const para1 = document.createElement("p");
	const textp1 = document.createTextNode("500k/Cành");
	para1.appendChild(textp1);
	Div2.appendChild(para1);
    Divboss.appendChild(Div2);

    const Divboss = document.createElement("div");
    const img = document.createElement("img");
    img.src = "../assets/images/hoadao.jpg";
    img.width = 300;
    Divboss.appendChild(img)
    const Div2 = document.createElement("div");
    const para = document.createElement("p");
	const textp = document.createTextNode("Hoa Đào");
	para.appendChild(textp);
	Div2.appendChild(para);
	const para1 = document.createElement("p");
	const textp1 = document.createTextNode("500k/Cành");
	para1.appendChild(textp1);
	Div2.appendChild(para1);
    Divboss.appendChild(Div2);


    document.body.appendChild(Divboss);
} */
/*     products.forEach(product => {
    const myDiv = document.createElement("div");
    myDiv.classList.add("product-item");

    const myDiv1 = document.createElement("div");
    myDiv1.classList.add("product-image");
    
    const productImg = document.createElement("img");
    productImg.src = product.img;
    productImg.alt = product.name;
    
    myDiv1.appendChild(productImg);
    myDiv.appendChild(myDiv1);

    const myDiv2 = document.createElement("div");
    myDiv2.classList.add("product-info");

    const productName = document.createElement("p");
    productName.textContent = product.name;

    const productPrice = document.createElement("p");
    productPrice.textContent = product.price;

    const link = document.createElement("a");
    link.href = "#";
    link.textContent = "Chi Tiết";

    myDiv2.append(productName, productPrice, link);
    myDiv.appendChild(myDiv2);

    document.body.appendChild(myDiv);
}); */
