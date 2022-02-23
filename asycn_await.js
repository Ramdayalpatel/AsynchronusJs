const stock = {
    fruits: ["strawbary", "grapes", "banana", "apple"],
    liquid: ["water", "ice"],
    holder: ["cone", "cup", "stick"],
    toppings: ["chocalate", "peanuts"]
}
let is_open = true;

function time(ms) {
    return new Promise((resolve, reject) => {
        if (is_open) {
            setTimeout(resolve, ms);
        }
        else {
            reject("Is Close");
        }
    });
}

async function working() {
    try {
        await time(1000);
        console.log(`Customer select flaver ${stock.fruits[3]}`);
        await time(0000)
        console.log(`Production is started`);
        await time(3000)
        console.log(`cutting is started  furits`);
        await time(2000)
        console.log(`what you want to topping  s"${stock.toppings[0]}" and "${stock.toppings[1]}" ??`)
        await time(4000)
        console.log(`Add ${stock.liquid[0]} and ${stock.liquid[1]}`)
        await time(2000)
        console.log(`making start with machine`)
        await time(2000)
        console.log(`select container ${stock.holder[1]}`)
        await time(1000)
        console.log(`Topping ${stock.toppings[1]}`)
        await time(0000)
        console.log(`Serve to customer`)
    } catch (error) {
        console.log(error);
    } finally {
        console.log("Good Day !!")
    }
}
working();