const root = document.getElementById("root");
let btn = document.getElementById("submit");
btn.addEventListener("click", selectValid);

let selectedArr = [];
let encode = atob(selectedArr);

const selectableText = `Lorem, _option1_ sit amet consectetur _option2_ elit. 
Non earum blanditiis fugiat hic odit placeat amet! Perspiciatis quos facilis dolore, 
nobis beatae _option3_ placeat non veritatis! Quae excepturi inventore aperiam!
`;
const answers = {
  option1: "ipsum",
  option2: "adipisicing",
  option3: "expedita",
};

const textArr = {
  option1: ["---------", "here", "this", "ipsum", "help"],
  option2: ["---------", "the swimer", "adipisicing", " is famous"],
  option3: ["---------", "solaro", "expedita", "benefis"],
};

function selectCreator(id, arr) {
  const select = document.createElement("select");
  select.id = id;
  arr.forEach((elem) => {
    const option = document.createElement("option");
    option.className = `option${id}`;
    option.innerText = elem;
    option.value = elem;
    option.required = true;
    select.append(option);
  });
  return select;
}

function initSelects() {
  root.innerHTML = selectableText.replace(/_option(\d)_/g, (match, id) => {
    const key = `option${id}`;
    const select = selectCreator(id, textArr[key]);
    return select.outerHTML;
  });
}

function isValidText() {
  let selects = document.getElementsByTagName("select");

  for (const select of selects) {
    let selectID = document.getElementById(`${select.id}`);
    selectID.addEventListener("change", (evt) => {
      selectedArr.push(evt.target.value);
      return selectedArr;
    });
  }
}

function selectValid(encode) {
  let selects = document.getElementsByTagName("select");

  let str = "";
  for (const iterator of selects) {
    str += iterator.value;
  }
  if (str.search("---------") > -1) {
    alert("Work is not done yet");
  } else {
    prompt("Please copy this Key", btoa(encode));
  }
}

function init() {
  initSelects();
  isValidText();
}

init();
