const readline = require('readline');

const rl = readline.createInterface ( {
    input: process.stdin,
    output: process.stdout 
});

rl.question("What's your name? Nicknames are also acceptable :) ", (answer1) => {
    console.log(`Thank you ${answer1}, tell us more about yourself`);
    rl.question("What's an activity you like doing?:) ", (answer1) => {
        console.log(`You like ${answer1}`);
        rl.question("What do you listen to while doing that: ", (answer1) => {
            console.log(`Good choice, ${answer1} is a great listen`);
            rl.question("Which meal is your favourite (eg: dinner, brunch, etc.) ", (answer1) => {
                console.log(`Your favorite meal is ${answer1}`);
                rl.question("What's your favourite thing to eat for that meal? ", (answer1) => {
                    console.log(`Your favorite food is ${answer1}`);
                    rl.question("Which sport is your absolute favourite? ", (answer1) => {
                        console.log(`You like ${answer1}`);
                        rl.question("Which sport is your absolute favourite? ", (answer1) => {
                        console.log(`${answer1} rocks!`);
                        rl.question("What is your superpower? In a few words, tell us what you are amazing at! ", (answer1) => {
                            console.log(`Your super powere is ${answer1}!`);
                            rl.close();
                        })
                    })
                    })
                })
            })
        })
    })
})



