const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
  if (inputBox.value === "") {
    alert("You must write something!");
    } else {
        let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
  console.log(localStorage.getItem("data"));
  }
  
  listContainer.addEventListener("click",function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
      saveData();
      } else if (e.target.tagName === "SPAN") {
        e.target.value.parentElement.remove();
        saveData();
        }
  },
  false
  );
  
  function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
    }
    function showTask() {
        listContainer.innerText = localStorage.getItem("data");
        }










        

        /*
        window.onload = function() {
            productList = (localStorage.getItem('productList')) || []; // Ürün listesini alır veya boş dizi oluşturur
            cartItems = JSON.parse(localStorage.getItem('cartItems')) || []; // Sepet öğelerini alır veya boş dizi oluşturur
            renderProductList(); // Ürün listesini günceller
            renderCart(); // Sepet listesini günceller
          } */








       /*function showTask() {
           listContainer.innerHTML = ""; // Önce listeyi temizleyelim
         
           if (localStorage.getItem("data")) {
             listContainer.innerHTML = localStorage.getItem("data");
         
             // Olay dinleyicilerini yeniden ekle
             let listItems = listContainer.getElementsByTagName("li");
             for (let i = 0; i < listItems.length; i++) {
               listItems[i].addEventListener("click", function (e) {
                 if (e.target.tagName === "LI") {
                   e.target.classList.toggle("checked");
                   saveData();
                 } else if (e.target.tagName === "SPAN") {
                   e.target.parentElement.remove();
                   saveData();
                 }
               });
             }
           }
         }*/