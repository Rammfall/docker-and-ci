const sum = (firstType: number, secondType: number): number => {
  return firstType + secondType;
};

export default sum;

let result;

fetch('https://github.com', { data: 5 }).then((res) => {
  result = res;
});

console.log(result);
