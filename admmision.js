const stock = {
    fruits: ["strawbary", "grapes", "banana", "apple"],
    liquid: ["water", "ice"],
    holder: ["cone", "cup", "stick"],
    toppings: ["chocalate", "peanuts"]
}
let is_open = true;
let order = (time, work) => {
    return new Promise((resolve, reject) => {
        if (is_open) {
            setTimeout(() => {
                resolve(work());
            }, time);
        } else {
            reject(console.log("shop is Closed"));
        }
    });
}
order(2000, () => console.log(`${stock.fruits[0]}` + "  Was Selected"))
    .then(() => {
        return order(0000, () => console.log(`Production is  Stared`));
    })
    .then(() => {
        return order(2000, () => console.log(`fruit cutting stared${stock.fruits[0]}`));
    })
    .then(() => {
        return order(1000, () => console.log(`Add ${stock.liquid[0]} and ${stock.liquid[1]}`));
    }).then(() => {
        return order(1000, () => console.log(`start Mixing into machine`));
    }).then(() => {
        return order(2000, () => console.log(`holding  into ${stock.holder[0]}`)
        );
    }).then(() => {
        return order(3000, () => console.log(`Toppings into ice creame ${stock.toppings[0]}`));
    }).catch(() => {
        console.log("Customer is left");
    }).finally(() => {
        console.log("\"thank you\"");
    });
