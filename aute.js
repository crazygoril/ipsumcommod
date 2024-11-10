function rgb(start, end) {
  let colors = [];
  let step = (end - start) / 255;
  for (let i = 0; i <= 255; i++) {
    let r = parseInt(start).toString(16);
    let g = parseInt(start).toString(16);
    let b = parseInt(start).toString(16);
    if (r.length === 1) r = '0' + r;
    if (g.length === 1) g = '0' + g;
    if (b.length === 1) b = '0' + b;
    colors.push(`#${r}${g}${b}`);
    start = parseInt(start, 16) + 1;
  }
  return colors;
}
