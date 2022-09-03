function randomColor(){
   const colors = ['red','green','orange','blue','purple','yellow']
   const max = colors.length - 1;
   const randomIndex = Math.floor(Math.random() * max)
   return colors[randomIndex];
};

module.exports = {randomColor}

