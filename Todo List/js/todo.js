let input = document.querySelector("input");
let btn = document.querySelector("button");
let ul = document.querySelector("ul");

readProduct();

btn.addEventListener("click", () => {
  if (input.value.trim() === "") {
    alert("Добавь задачку");
  } else {
    let newTask = {
      input: input.value,
    };
    let data = JSON.parse(localStorage.getItem("task")) || [];
    data.push(newTask);
    localStorage.setItem("task", JSON.stringify(data));
    readProduct();
    input.value = "";
  }
});

function readProduct() {
  ul.innerText = "";
  let data = JSON.parse(localStorage.getItem("task")) || [];

  data.forEach((el, index) => {
    let liName = document.createElement("li");
    let btnDelete = document.createElement("button");

    liName.innerText = `This is a task: ${el.input}`;
    btnDelete.innerText = "Delete";
    liName.append(btnDelete);
    ul.append(liName);

    btnDelete.addEventListener("click", () => {
      deleteProduct(index);
    });
  });
}

function deleteProduct(id) {
  let data = JSON.parse(localStorage.getItem("task")) || [];
  data.splice(id, 1);
  localStorage.setItem("task", JSON.stringify(data));
  readProduct();
}
