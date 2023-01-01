let userFormDOM = document.querySelector("#liveToastBtn");
userFormDOM.addEventListener("submit", newElement);

toDoITEM = "";
function newElement() {
  const toDoITEM = document.querySelector("#task");
  if (toDoITEM.value) {
    $("#liveToast").toast("show");
    LIST_ITEM(toDoITEM.value);
    toDoITEM.value = "";
  } else {
    $("#liveToastError").toast("show");
  }
}

let listDOM = document.querySelector("#list");

const LIST_ITEM = (event) => {
  // Dinamik olarak oluşturduğumuz li elementi içine span ile bir X sembolü koyduk.
  let liDOM = document.createElement("li");
  liDOM.innerHTML = `${event}  <span class="closed btn-remove " style="float: right">X</span>`;
  listDOM.appendChild(liDOM);

  // dinleme özelliği verdiğimiz li elmentine tıklanıldığında "checked" claasını ekleyip çıkarması için tanımladık.
  liDOM.addEventListener("click", function () {
    liDOM.classList.toggle("checked");
  });

  // li içindeki span etiketine ulaşabilmek için bir değişken oluşturduk.
  let btnRemove = document.querySelectorAll(".btn-remove");

  // foreach ile span etiketlerimizi teker teker işlem yapabilmek için seçtik.
  btnRemove.forEach((removeList) => {
    // removeList değişkenine her defasında tıkladığımız span elementi aktarılır ve span elementinin bir üst elementini silmek için parentElement özellğini kullandık.
    removeList.addEventListener("click", function () {
      removeList.parentElement.remove();
      // silinen element için toast mesajı
      $("#liveToastDelete").toast("show");
    });
  });
};
