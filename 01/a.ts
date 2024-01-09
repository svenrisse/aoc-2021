const input = await Bun.file("./input.txt").text();

const lines = input.split("\n");

let count = 0;
console.log(lines.length);
lines.map((line, index) => {
  if (parseInt(line) > parseInt(lines[index - 1])) {
    count++;
  }
});

console.log(count);
