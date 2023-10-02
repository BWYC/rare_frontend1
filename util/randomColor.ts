export default function randomColor() {
    let letters = "0123456789ABCDEFGHIJZKDSR12434KM34MK";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 40/10)];
    }
    return color;
  }