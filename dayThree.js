const fs = require(`fs`);

const correctMultiply = (inputFile) =>{
    const input = fs
    .readFileSync(`./input/${inputFile}.txt`, "utf-8");

  const regex = /mul\(\d+,\d+\)/g

  const matchedMuls = input.match(regex)
  console.log(matchedMuls)

  let totalSum = 0

  matchedMuls.forEach((process)=>{
    const digitRegex = /\d+/g
    const [a,b] = process.match(digitRegex)
    totalSum += a*b
  })

  console.log(totalSum)
}

const correctMultiplyPartTwo = (inputFile) => {
    const input = fs
    .readFileSync(`./input/${inputFile}.txt`, "utf-8");
    const split1 = input.split("don\'t()")
    console.log(split1.length)
    const enabledParts= [split1[0]]
    for(let i = 1 ; i<split1.length ; i++){
        let current = split1[i]
        const secondSplit = current.split("do()")
        console.log(secondSplit.length)
        if(secondSplit.length >=2){
        enabledParts.push(...secondSplit.slice(1)) 
        }
    }
    const matchedMuls = enabledParts.map((part)=>{
        const regex = /mul\(\d+,\d+\)/g
        return part.match(regex)
    })


    const flattedMatchedMuls = matchedMuls.flat();
    let totalSum = 0
    flattedMatchedMuls.forEach((process)=>{
        const digitRegex = /\d+/g
        const [a,b] = process.match(digitRegex)
        totalSum += a*b
      })
      console.log(totalSum)
}
correctMultiplyPartTwo("thirdDayInput")