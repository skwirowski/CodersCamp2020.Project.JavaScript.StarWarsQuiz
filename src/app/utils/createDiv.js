export default function createDiv(className, id) {
  let div = document.createElement('div');

  if (className !== undefined) div.className = className;
  if (id !== undefined) div.id = id;

  return div;
}
