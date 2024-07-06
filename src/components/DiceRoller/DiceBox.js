import DiceBox from "@3d-dice/dice-box";

const Dice = new DiceBox(
  "#dice-box", 
  {
    id: "dice-canvas",
    assetPath: `${process.env.PUBLIC_URL}/assets/dice-box/`,
    gravity: 1,
    mass: 1,
    friction: 0.8,
    restitution: 0.5,
    angularDamping: 0.5,
    linearDamping: 0.5,
    spinForce: 6,
    throwForce: 8,
    startingHeight: 10,
    lightIntensity: 1,
    enableShadows: true,
    shadowTransparency: 0.8,
    theme: 'default',
    scale: 6
  }
);

let diceInitialized = false;

const initializeDice = async () => {
  if (!diceInitialized) {
    await Dice.init();
    diceInitialized = true;
  }
};

const addDice = (notation) => {
  Dice.add(notation);
};

const resetDice = () => {
  Dice.clear();
};

export { Dice, initializeDice, addDice, resetDice };
