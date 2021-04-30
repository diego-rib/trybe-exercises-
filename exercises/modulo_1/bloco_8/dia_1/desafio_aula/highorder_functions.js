const wakeUp = () => console.log('Acordando!!');

const breakfast = () => console.log('Bora tomar café!!');

const sleep = () => console.log('Partiu dormir!!');

const doingThings = (action) => action();

doingThings(wakeUp);
doingThings(breakfast);
doingThings(sleep);
