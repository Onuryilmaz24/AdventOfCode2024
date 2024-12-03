const fs = require(`fs/promises`);

async function historianHysteria(inputFile) {
  const input = await fs.readFile(`./input/${inputFile}.txt`, "utf-8");
  const regex = /\b\d{5}\b/g;
  const splittedArray = input.match(regex);
  const list1 = [];
  const list2 = [];

  for (let i = 0; i < splittedArray.length; i += 2) {
    list1.push(splittedArray[i]);
    list2.push(splittedArray[i + 1]);
  }

  list1.sort((a, b) => {
    return a - b;
  });
  list2.sort((a, b) => {
    return a - b;
  });

  let totalDistance = 0;

  for (let i = 0; i < list1.length; i++) {
    totalDistance += Math.abs(Number(list1[i]) - Number(list2[i]));
  }
  console.log(totalDistance);
  return totalDistance;
}

async function historianHysteriaPart2(inputFile) {
  const input = await fs.readFile(`./input/${inputFile}.txt`, "utf-8");

  const regex = /\b\d{5}\b/g;

  const splittedArray = input.match(regex);

  const list1 = [];
  const list2 = [];

  for (let i = 0; i < splittedArray.length; i += 2) {
    list1.push(splittedArray[i]);
    list2.push(splittedArray[i + 1]);
  }

  let totalDistance = 0;

  for (let number of list1) {
    let appereance = list2.reduce(
      (counter, currentNum) => (number === currentNum ? counter + 1 : counter),
      0
    );

    if (appereance) {
      totalDistance += number * appereance;
    }
  }

  console.log(totalDistance);
}

