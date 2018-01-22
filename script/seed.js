/**
 * Welcome to the seed file! This seed file uses a newer language feature called...
 *
 *                  -=-= ASYNC...AWAIT -=-=
 *
 * Async-await is a joy to use! Read more about it in the MDN docs:
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function
 *
 * Now that you've got the main idea, check it out in practice below!
 */
const db = require('../server/db')
const { Quote } = require('../server/db/models')

async function seed () {
  await db.sync({force: true})
  console.log('db synced!')
  // Whoa! Because we `await` the promise that db.sync returns, the next line will not be
  // executed until that promise resolves!

  const quotes = await Promise.all([
    Quote.create({ body:  'Nothing is impossible, the word itself says “I’m possible”!', author: 'Audrey Hepburn' }),
    Quote.create({ body:  'I’ve learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.', author: 'Maya Angelou' }),
    Quote.create({ body:  'Whether you think you can or you think you can’t, you’re right.', author: 'Henry Ford' }),
    Quote.create({ body:  'Perfection is not attainable, but if we chase perfection we can catch excellence.', author: 'Vince Lombardi' }),
    Quote.create({ body:  'Life is 10% what happens to me and 90% of how I react to it.', author: 'Charles Swindoll' }),
    Quote.create({ body:  'If you look at what you have in life, you’ll always have more. If you look at what you don’t have in life, you’ll never have enough.', author: 'Oprah Winfrey' }),
    Quote.create({ body:  'Remember no one can make you feel inferior without your consent.', author: 'Eleanor Roosevelt' }),
    Quote.create({ body:  'I can’t change the direction of the wind, but I can adjust my sails to always reach my destination.', author: 'Jimmy Dean' }),
    Quote.create({ body:  'Believe you can and you’re halfway there.', author: 'Theodore Roosevelt' }),
    Quote.create({ body:  'To handle yourself, use your head; to handle others, use your heart.', author: 'Eleanor Roosevelt' }),
    Quote.create({ body:  'Too many of us are not living our dreams because we are living our fears.', author: 'Les Brown' }),
    Quote.create({ body:  'Do or do not. There is no try.', author: 'Yoda' }),
    Quote.create({ body:  'Whatever the mind of man can conceive and believe, it can achieve.', author: 'Napoleon Hill' }),
    Quote.create({ body:  'Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do, so throw off the bowlines, sail away from safe harbor, catch the trade winds in your sails. Explore, Dream, Discover.', author: 'Mark Twain' }),
    Quote.create({ body:  'I’ve missed more than 9000 shots in my career. I’ve lost almost 300 games. 26 times I’ve been trusted to take the game winning shot and missed. I’ve failed over and over and over again in my life. And that is why I succeed.', author: 'Michael Jordan' }),
    Quote.create({ body:  'Strive not to be a success, but rather to be of value.', author: 'Albert Einstein' }),
    Quote.create({ body:  'I am not a product of my circumstances. I am a product of my decisions.', author: 'Stephen Covey' }),
    Quote.create({ body:  'When everything seems to be going against you, remember that the airplane takes off against the wind, not with it.', author: 'Henry Ford' }),
    Quote.create({ body:  'The most common way people give up their power is by thinking they don’t have any.', author: 'Alice Walker' }),
    Quote.create({ body:  'The most difficult thing is the decision to act, the rest is merely tenacity.', author: 'Amelia Earhart' }),
    Quote.create({ body:  'It is during our darkest moments that we must focus to see the light.', author: 'Aristotle Onassis' }),
    Quote.create({ body:  'Don’t judge each day by the harvest you reap but by the seeds that you plant.', author: 'Robert Louis Stevenson' }),
    Quote.create({ body:  'The only way to do great work is to love what you do.', author: 'Steve Jobs' }),
    Quote.create({ body:  'Change your thoughts and you change your world.', author: 'Norman Vincent Peale' }),
    Quote.create({ body:  'The question isn’t who is going to let me; it’s who is going to stop me.', author: 'Ayn Rand' }),
    Quote.create({ body:  'If you hear a voice within you say "you cannot paint," then by all means paint and that voice will be silenced.', author: 'Vincent Van Gogh' }),
    Quote.create({ body:  'Build your own dreams, or someone else will hire you to build theirs.', author: 'Farrah Gray' }),
    Quote.create({ body:  'Remember that not getting what you want is sometimes a wonderful stroke of luck.', author: 'Dalai Lama' }),
    Quote.create({ body:  'You can’t use up creativity. The more you use, the more you have.', author: 'Maya Angelou' }),
    Quote.create({ body:  'I have learned over the years that when one’s mind is made up, this diminishes fear.', author: 'Rosa Parks' }),
    Quote.create({ body:  'I would rather die of passion than of boredom.', author: 'Vincent van Gogh' }),
    Quote.create({ body:  'A truly rich man is one whose children run into his arms when his hands are empty.', author: 'Unknown' }),
    Quote.create({ body:  'A person who never made a mistake never tried anything new.', author: 'Albert Einstein' }),
    Quote.create({ body:  'What’s money? A man is a success if he gets up in the morning and goes to bed at night and in between does what he wants to do.', author: 'Bob Dylan' }),
    Quote.create({ body:  'I have been impressed with the urgency of doing. Knowing is not enough; we must apply. Being willing is not enough; we must do.', author: 'Leonardo da Vinci' }),
    Quote.create({ body:  'If you want to lift yourself up, lift up someone else.', author: 'Booker T. Washington' }),
    Quote.create({ body:  'Limitations live only in our minds. But if we use our imaginations, our possibilities become limitless.', author: 'Jamie Paolinetti' }),
    Quote.create({ body:  'If you’re offered a seat on a rocket ship, don’t ask what seat! Just get on.', author: 'Sheryl Sandberg' }),
    Quote.create({ body:  'Certain things catch your eye, but pursue only those that capture the heart.', author: 'Ancient Indian Proverb' }),
    Quote.create({ body:  'When one door of happiness closes, another opens, but often we look so long at the closed door that we do not see the one that has been opened for us.', author: 'Helen Keller' }),
    Quote.create({ body:  'Everything has beauty, but not everyone can see.', author: 'Confucius' }),
    Quote.create({ body:  'How wonderful it is that nobody need wait a single moment before starting to improve the world.', author: 'Anne Frank' }),
    Quote.create({ body:  'When I was 5 years old, my mother always told me that happiness was the key to life. When I went to school, they asked me what I wanted to be when I grew up. I wrote down “happy”. They told me I didn’t understand the assignment, and I told them they didn’t understand life.', author: 'John Lennon' }),
    Quote.create({ body:  'The only person you are destined to become is the person you decide to be.', author: 'Ralph Waldo Emerson' }),
    Quote.create({ body:  'We can’t help everyone, but everyone can help someone.', author: 'Ronald Reagan' }),
    Quote.create({ body:  'Everything you’ve ever wanted is on the other side of fear.', author: 'George Addair' }),
    Quote.create({ body:  'We can easily forgive a child who is afraid of the dark; the real tragedy of life is when men are afraid of the light.', author: 'Plato' }),
    Quote.create({ body:  'Nothing will work unless you do.', author: 'Maya Angelou' }),
    Quote.create({ body:  'I alone cannot change the world, but I can cast a stone across the water to create many ripples.', author: 'Mother Teresa' }),
    Quote.create({ body:  'What we achieve inwardly will change outer reality.', author: 'Plutarch' })
    
  ])
  // Wowzers! We can even `await` on the right-hand side of the assignment operator
  // and store the result that the promise resolves to in a variable! This is nice!
  console.log(`seeded ${quotes.length} quotes`)
  console.log(`seeded successfully`)
}

// Execute the `seed` function
// `Async` functions always return a promise, so we can use `catch` to handle any errors
// that might occur inside of `seed`
seed()
  .catch(err => {
    console.error(err.message)
    console.error(err.stack)
    process.exitCode = 1
  })
  .then(() => {
    console.log('closing db connection')
    db.close()
    console.log('db connection closed')
  })

/*
 * note: everything outside of the async function is totally synchronous
 * The console.log below will occur before any of the logs that occur inside
 * of the async function
 */
console.log('seeding...')
