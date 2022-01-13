const addBtn = document.getElementById("addBtn");

addBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let bookName = document.getElementById("bookName").value;
  let author = document.getElementById("author").value;
  let publisheYear = document.getElementById("publisherYear").value;
  let publisheCenter = document.getElementById("publisherCenter").value;
  if (
    bookName == "" ||
    author == "" ||
    publisheYear == "" ||
    publisheCenter == ""
  ) {
    alert("please fill up the form");
  } else {
    let listBody = document.getElementById("listBody");

    let createTr = document.createElement("tr");
    // book th
    let bookTh = document.createElement("th");
    bookTh.innerHTML = bookName;
    createTr.appendChild(bookTh);

    //   author

    let authorTh = document.createElement("th");
    authorTh.innerHTML = author;
    createTr.appendChild(authorTh);
    //   publisher year
    let publisherYearTh = document.createElement("th");
    publisherYearTh.innerHTML = publisheYear;
    createTr.appendChild(publisherYearTh);
    // publisher center

    let publisheCenterTh = document.createElement("th");
    publisheCenterTh.innerHTML = publisheCenter;
    createTr.appendChild(publisheCenterTh);

    //   delete btn

    let deleteElement = document.createElement("th");
    deleteElement.classList = "fas fa-trash text-danger fs-4";

    deleteElement.addEventListener("click", (e) => {
      createTr.removeChild(authorTh);
      createTr.removeChild(publisheCenterTh);
      createTr.removeChild(publisherYearTh);
      createTr.removeChild(bookTh);
      createTr.removeChild(deleteElement);
    });

    createTr.appendChild(deleteElement);
    listBody.appendChild(createTr);
    // remove all
    const removeAllBtn = document.getElementById("removeAllBtn");

    removeAllBtn.addEventListener("click", () => {
      listBody.removeChild(createTr);
      removeAllBtn.innerText = "empty book list please add book";
      removeAllBtn.classList = "btn btn-light w-100";
    });
  }
});
