let stocks = {
  fruits: ["mango", "strawberry", "grapes", "blacks", "asians"],
  liquid: ["water", "ice"],
  toppings: ["chocolate", "peanuts"],
};
var fruit = 1;
let is_shop_open = true;
let order = (time, work, fruit) => {
  return new Promise((resolve, reject) => {
    if (is_shop_open) {
      setTimeout(() => {
        resolve(work(fruit));
      }, time);
    } else {
      reject(console.log("our shop is closed"));
    }
  });
};

function work(fruit) {
  console.log(`fruit ${stocks.fruits[fruit]} is selected`);
}
order(2000, work, 0)
  .then(() => {
    return order(1000, () => console.log("production has started!!"));
  })
  .then(() => {
    return order(2000, () => console.log("fruit was chooped"));
  })
  .then(() => {
    return order(2000, () =>
      console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was selected!!`)
    );
  })
  .catch(() => {
    console.log("customer left");
  })
  .finally(() => {
    console.log("end of day!!");
  });
