const data = [
  { name: "Tomato", cost: 5, weight: 10 },
  { name: "Potato", cost: 8, weight: 4 },
  { name: "Onion", cost: 2, weight: 15 },
];

const SortedData = (x) => {
  return x.cost;
};
const sortOrder = "asc";
const updatedData = data.sort((a, b) => {
  const valueA = SortedData(a);
  const valueB = SortedData(b);
  const reverseOrder = sortOrder === "asc" ? 1 : -1;
  if (typeof valueA === "string") {
    return valueA.localeCompare(valueB) * reverseOrder;
  }
  return (valueA - valueB) * reverseOrder;
});

console.log(updatedData);
