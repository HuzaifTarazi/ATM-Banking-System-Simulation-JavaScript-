let userLogin = Number(
  window.prompt("Hello Huzaif Tarazi. \n Please Enter Your Passkey: ")
);
const userKey = 7860;

while (!(userLogin === userKey)) {
  alert("PassKey Invalid Try Again!");
  userLogin = Number(
    window.prompt(`Hello Huzaif Tarazi. \n Please Enter Your Passkey: `)
  );
}
console.log("Login success");
alert("Welcome!");

let totalBalance = 0;

for (;;) {
  const checkBalance = "TB";
  const depositBalance = "DB";
  const withdrawBalance = "WB";
  const exit = "X";
  let userInput = String(
    window.prompt(
      ` 1. Enter ${checkBalance} To Check Account Balance. \n 2. Enter ${depositBalance} to Deposit in Account. \n 3. Enter ${withdrawBalance} to Withdraw Money. \n Type ${exit} to Cancel.`
    )
  );

  while (userInput === "") {
    alert("Feild can't be left empty");
    break;
  }

  if (userInput === checkBalance) {
    console.log(`Check Balance Program`);
    alert(`Your Total Balance is ${totalBalance}Pkr`);
  } else if (userInput === depositBalance) {
    console.log(`Deposit Program`);
    let addBalance = Number(window.prompt("Enter Deposit Amount:"));
    totalBalance += addBalance;
    alert(`${addBalance}Pkr Added to Total Amount. Now Total Account Balance is: ${totalBalance}`);
    console.log(totalBalance);
  } else if (userInput === withdrawBalance) {
    console.log(`Deposit Program`);
    let addBalance = Number(window.prompt("Enter WithDraw Amount:"));
    totalBalance -= addBalance;
    alert(`${addBalance}Pkr Withdrawn from Total Amount. Now Total Account Balance is: ${totalBalance}`);

    console.log(totalBalance);
  } else if (userInput === exit) {
    console.log("You have Exited Program");
    break;
  }
}
