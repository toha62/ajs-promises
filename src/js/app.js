// import './GameSavingLoader';
import GameSavingLoader from './GameSavingLoader';

// console.log('return', GameSavingLoader.load());
GameSavingLoader.load().then(saving => {
  // saving объект класса GameSaving
  console.log(saving);
}, (error) => {
  // ...
});
