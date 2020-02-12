import wait from "waait";
import faker from "faker";
console.log(faker);

async function go() {
  console.log("going!");
  await wait(5000);
  console.log("ending");
}

go();
