const readline = require('readline');
const { stdin: input, stdout: output } = require('process');

const rl = readline.createInterface({ input, output });

rl.question('What is your name? ', (answer1) => {
  rl.question('What is an activity you like doing? ', (answer2) => {
    rl.question('What do you listen to while you do that? ', (answer3) => {
      rl.question('Which of the meals is your favourite? Out of brunch, dinner, etc? ', (answer4) => {
        rl.question('What is your favourite thing to have for that meal? ', (answer5) => {
          rl.question('What is your ABSOULUTE favourite sport? ', (answer6) => {
            rl.question('What is your superpower? Aka, what are you amazing at? ', (answer7) => {
              console.log(`Hi, my name is ${answer1}. My favouite activity has to be ${answer2} while listening to ${answer3}.
My favourite meal of the day is ${answer4}, and I typically eat ${answer5}, since it's my favourite.
While I eat, I sometimes watch ${answer6}. If I had a superpower, it would have to be ${answer7}!`);
              rl.close();
            });
          })
        })
      })
    })
  })
})

// I formatted it to have a new line twice, to reduce clutter, hopefully that is okay.