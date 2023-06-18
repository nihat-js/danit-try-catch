const books = [
  {
    author: "Lucy Foley",
    name: "List of Invitees",
    price: 70,
  },
  {
    author: "Susanna Clarke",
    name: "Jonathan Strange & Mr Norrell",
  },
  {
    name: "Design. A Book for Non-Designers.",
    price: 70,
  },
  {
    author: "Alan Moore",
    name: "Neonomicon",
    price: 70,
  },
  {
    author: "Terry Pratchett",
    name: "Moving Pictures",
    price: 40,
  },
  {
    author: "Angus Hyland",
    name: "Cats in Art",
  },
];

function renderBooksList() {
  let ul = document.createElement("ul");
  books.forEach((book) => {
    try {
      let { author, name, price } = book;
      if (
        typeof author == "undefined" ||
        typeof name == "undefined" ||
        typeof price == "undefined"
      ) {
        throw new Error("Data is not fulfilled");
      }
      let li = document.createElement("li");
      li.innerHTML = ` Author : ${author}  <br>  Name : ${name} <br> Price : ${price}`;
      ul.appendChild(li);
    } catch (e) {
      let missing = "";
      if (book.name === undefined) {
        missing += "name ";
      }
      if (book.author === undefined) {
        missing += "author ";
      }
      if (book.price === undefined) {
        missing += "price ";
      }

      console.log(`Missing property: ${missing}  `);
    }
  });
  document.getElementById("root").append(ul);
}
renderBooksList();
