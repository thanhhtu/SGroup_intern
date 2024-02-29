// let text = "hello,1 h,1 haha,1 hehe";
// let text2 = text.split(1);
// console.log(text2);
// console.log(text2);
const a = document.getElementById('hehe');
console.log(a);
const b = document.getElementsByClassName('haha');
console.log(b);
const c = document.querySelector('#hehe');  //lấy ra thẻ đầu tiên có class id hehe
console.log(b);
const d = document.querySelectorAll('#hehe');   //lấy ra tất cả thẻ có class id hehe
console.log(d);
a.textContent = "my name issssss";
a.innerText = " VTTus";
a.innerHTML = "<p>okeokeokeoke</p>"

//them
let el = document.createElement('button')
el.textContent = "click me";
a.appendChild(el);
a.append("aaaaa");  //thêm vào cuối

let el2 = document.createElement('button')
el2.textContent = "clickkkkk";
a.insertBefore(el2, el);  

document.write("<b>bbbbbbbbb</b>"); //thêm nhanh 1 element

//xoa
// a.removeChild(el);   
// a.insertAdjacentElement("beforebegin", el);
// a.remove(); //xóa chính nó

//cập nhật
a.replaceChild(el2, el);
console.log(a.id);

//thuộc tính
a.title = "link link";   //thuộc tính phải hợp lệ (a hỗ trợ được)
a.setAttribute("aa", "blinkblink");  //thuộc tính k hợp lệ vẫn được
console.log(a.getAttribute("title"));   //in ra giá trị của thuộc tính

//thêm, xóa class vào thẻ
a.classList.add("uuuuuu");  //thêm class
a.classList.remove("iiiii");    //xóa class, k có thì thôi //cách khác để xóa class là replace tên rống
console.log(a.className);

//thêm style
a.style.color = "violet";

//thêm sự kiện
//cách 1
a.addEventListener("click", function(){
    console.log("helloo");
    document.getElementById("haha").style.display = "none";
})
//cách 2
function okey(){
    console.log("helloo");
    document.getElementById("haha").style.display = "none";
}

//xóa sự kiện
a.removeEventListener("click", function(){  //chỉ xóa được cái giống nó mà loại thêm vào
    console.log("helloo");
    document.getElementById("haha").style.display = "none";
})

function okay(){
    console.log("hi");
}