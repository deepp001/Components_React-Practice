const data = [5, 20, 10, 4];
const stringData = ["a", "B", "R", "t", "A", "b"];

const deccendeData = data.sort((a, b) => {
  return a - b;
});
console.log(deccendeData);

const decendedData = data.sort((a, b) => {
  return b - a;
});
console.log(decendedData);

const updatedStingData = stringData.sort((a, b) => {
  return a.localeCompare(b);
});
console.log(updatedStingData);
