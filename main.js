const value = document.querySelector("#slider");

const uppercase = document.querySelector("#uppercase");
const lowercase = document.querySelector("#lowercase");
const numbers = document.querySelector("#numbers");
const symbols = document.querySelector("#symbols");

const button = document.querySelector(".button");

const copy = document.querySelector(".copy");

const uppercaseStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercaseStr = "abcdefghijklmnopqrstuvwxyz";
const numbersStr = "0123456789";
const symbolsStr = "~!@#$%^&*()_+-=";

//Change value for slider function

value.addEventListener("change", () => {
  const sliderValue = document.querySelector(".sliderValue");
  sliderValue.innerHTML = value.value;
});

//Generate Password function

button.addEventListener("click", () => {
  //remove copied
  const copied = document.querySelector(".copied");
  copied.classList.contains("active") && copied.classList.remove("active");

  //remove colour
  const boxes = document.querySelectorAll(".box");
  boxes.forEach((node) => {
    node.classList.value = "box";
  });

  let passStr = "";
  let counter = 0;
  if (uppercase.checked) {
    passStr += uppercaseStr;
    counter++;
  }

  if (lowercase.checked) {
    passStr += lowercaseStr;
    counter++;
  }

  if (numbers.checked) {
    passStr += numbersStr;
    counter++;
  }

  if (symbols.checked) {
    passStr += symbolsStr;
    counter++;
  }

  let result = "";
  const passStrLength = passStr.length;

  for (let i = 0; i < value.value; i++) {
    result += passStr.charAt(Math.floor(Math.random() * passStrLength));
  }

  replace(result);
  change(counter);
});

//replacing placeholder function

const replace = (result) => {
  const generated = document.querySelector(".generated");
  generated.placeholder = result;
  generated.classList.add("white");
};

//copy function
copy.addEventListener("click", () => {
  const generated = document.querySelector(".generated");
  navigator.clipboard.writeText(generated.placeholder);

  showCopy();
});

//show copied text function

const showCopy = () => {
  const copied = document.querySelector(".copied");
  copied.classList.add("active");
};

//password strength change function
const change = (counter) => {
  let string = "";
  let colour = "";
  switch (counter) {
    case 1:
      string = "TOO WEAK!";
      colour = "red";
      break;
    case 2:
      string = "WEAK!";
      colour = "orange";
      break;
    case 3:
      string = "MEDIUM";
      colour = "yellow";
      break;
    case 4:
      string = "STRONG";
      colour = "green";
      break;
  }

  const boxes = document.querySelectorAll(".box");
  for (let i = 0; i < counter; i++) {
    boxes[i].classList.add(colour);
  }

  const passwordStrength = document.querySelector(".password-strength");
  passwordStrength.innerHTML = string;
};
