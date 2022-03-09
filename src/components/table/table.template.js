const CODES = {
  A: 65,
  Z: 90
}

function toCell(_, col, row) {
  return `
    <div class="cell" contentEditable="true" data-row="${row}" data-col="${col + 1}"></div>
   `
}

function toColumn(col, index) {
  return `
    <div class="column" data-type="resizable" data-col="${index + 1}">
      ${col}
      <div class="col-resize" data-resize="col"></div>
    </div>
   `
}

function createRow(content, index = '') {
  const resize = index ? '<div class="row-resize" data-resize="row"></div>' : ''
  const dataRow = index ? `data-row="${index}"` : index
  return `
    <div class="row" data-type="resizable" ${dataRow}>
      <div class="row-info" ${dataRow}>
        ${index}
        ${resize}
      </div>
      <div class="row-data">${content}</div>
    </div>
  `
}

function toChar(_, index) {
  return String.fromCharCode(CODES.A + index)
}

export function createTable(rowsCount = 25) {
  const colsCount = CODES.Z - CODES.A + 1
  const rows = []

  const cols = new Array(colsCount)
    .fill('')
    .map(toChar)
    .map(toColumn)
    .join('')

  rows.push(createRow(cols))

  for (let i = 0; i < rowsCount; i++) {
    const cells = new Array(colsCount)
      .fill('')
      .map((el, index) => toCell(el, index, i + 1))
      .join('')

    rows.push(createRow(cells, i + 1))
  }

  return rows.join('')
}

