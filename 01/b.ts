const input = await Bun.file("./input.txt").text();

const lines = input.split("\n");

const parsed = lines.map((line) => parseInt(line));

let count = 0;
parsed.map((i) => {
  const prev = parsed[i - 1] + parsed[i] + parsed[i + 1];
  const cur = parsed[i] + parsed[i + 1] + parsed[i + 2];

  if (cur > prev) {
    count++;
  }
});

console.log(count);
