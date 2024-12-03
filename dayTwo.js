const fs = require(`fs`);

function redNosedReports(inputFile) {
  const input = fs
    .readFileSync(`./input/${inputFile}.txt`, "utf-8")
    .trim()
    .split("\n");

  console.log(input);

  const ascendingChecker = (report) => {
    const transformedReport = report.split(" ").map((element) => {
      return Number(element);
    });
    let isAscending = true;
    for (let i = 0; i < transformedReport.length - 1; i++) {
      let current = transformedReport[i];
      let next = transformedReport[i + 1];
      let diff = next - current;
      if (diff < 1 || diff > 3) {
        isAscending = false;
      }
    }
    return isAscending;
  };
  const descendingChecker = (report) => {
    const transformedReport = report.split(" ").map((element) => {
      return Number(element);
    });
    let isDescending = true;
    for (let i = 0; i < transformedReport.length - 1; i++) {
      let current = transformedReport[i];
      let next = transformedReport[i + 1];
      let diff = current - next;
      if (diff < 1 || diff > 3) {
        isDescending = false;
      }
    }
    return isDescending;
  };

  let safeReports = 0;

  input.forEach((report) => {
    if (ascendingChecker(report) || descendingChecker(report)) {
      safeReports++;
    }
  });

  return safeReports;
}
function redNosedReportsProblemDampener(inputFile) {
  const input = fs
    .readFileSync(`./input/${inputFile}.txt`, "utf-8")
    .trim()
    .split("\n");

  console.log(input);

  const ascendingChecker = (report) => {
    const transformedReport = report.split(" ").map((element) => {
      return Number(element);
    });
    let isAscending = true;
    for (let i = 0; i < transformedReport.length - 1; i++) {
      let current = transformedReport[i];
      let next = transformedReport[i + 1];
      let diff = next - current;
      if (diff < 1 || diff > 3) {
        isAscending = false;
      }
    }
    return isAscending;
  };
  const descendingChecker = (report) => {
    const transformedReport = report.split(" ").map((element) => {
      return Number(element);
    });
    let isDescending = true;
    for (let i = 0; i < transformedReport.length - 1; i++) {
      let current = transformedReport[i];
      let next = transformedReport[i + 1];
      let diff = current - next;
      if (diff < 1 || diff > 3) {
        isDescending = false;
      }
    }
    return isDescending;
  };

  let safeReports = 0;

  input.forEach((report) => {
    if (ascendingChecker(report) || descendingChecker(report)) {
      safeReports++;
    }else{
      const transformedReport = report.split(" ").map((element) => {
        return Number(element)});
      for(let i = 0 ; i<transformedReport.length ; i++){
        const modifiedReport = [...transformedReport]
        modifiedReport.splice(i,1)
        if(ascendingChecker(modifiedReport.join(" ")) || descendingChecker(modifiedReport.join(" "))){
          safeReports++;
          break;
        }
      }
    }
  });

  console.log(safeReports)

  return safeReports;

}
redNosedReportsProblemDampener("secondDayInput");
