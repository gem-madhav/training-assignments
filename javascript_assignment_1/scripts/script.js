const users = [
  {
    name: "Madhav",
    age: 22,
    dob: "Sep 25, 2000",
    email: "madhav.kwatra@geminisolutions.com",
    company: "Gemini Solutions",
  },
  {
    name: "Madhav",
    age: 22,
    dob: "Sep 25, 2000",
    email: "madhav.kwatra@geminisolutions.com",
    company: "Gemini Solutions",
  },
  {
    name: "Madhav",
    age: 22,
    dob: "Sep 25, 2000",
    email: "madhav.kwatra@geminisolutions.com",
    company: "Gemini Solutions",
  },
  {
    name: "Madhav",
    age: 22,
    dob: "Sep 25, 2000",
    email: "madhav.kwatra@geminisolutions.com",
    company: "Gemini Solutions",
  },
  {
    name: "Madhav",
    age: 22,
    dob: "Sep 25, 2000",
    email: "madhav.kwatra@geminisolutions.com",
    company: "Gemini Solutions",
  },
];

function createTable() {
  const body = document.querySelector("body");
  const table = document.createElement("table");
  const tr = document.createElement("tr");

  //   The Headers
  for (field in users[0]) {
    const th = document.createElement("th");
    th.style.fontSize = "2em";
    th.style.fontWeight = "bold";
    th.textContent = field.toUpperCase();
    tr.appendChild(th);
  }

  table.appendChild(tr);

  //   The Values
  for (user of users) {
    console.log(user);
    const tr = document.createElement("tr");
    for (let key in user) {
      const td = document.createElement("td");
      const textNode = document.createTextNode(user[key]);
      td.appendChild(textNode);
      tr.appendChild(td);
    }
    table.appendChild(tr);
  }

  body.appendChild(table);
}

createTable();
