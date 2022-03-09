import {$} from "@core/dom";

export function resizeHandler($root, event) {
  const $resizer = $(event.target)

  const $parent = $resizer.closest('[data-type="resizable"]')
  const coords = $parent.getCoords
  const tableHeight = $root.getCoords.height - 24
  const tableWidth = $root.getCoords.width - 40

  const isCol = $resizer.hasClass('col-resize')

  if (isCol) {
    $resizer.css({
      bottom: -tableHeight + 'px'
    })
  } else {
    $resizer.css({
      right: -tableWidth + 'px'
    })
  }

  let value

  document.onmousemove = e => {
    if (isCol) {
      const delta = e.pageX - coords.right
      value = coords.width + delta

      $resizer.css({right: -delta + 'px'})
    } else {
      const delta = e.pageY - coords.bottom
      value = coords.height + delta

      $resizer.css({bottom: -delta + 'px'})
    }
  }

  document.onmouseup = e => {
    document.onmousemove = null
    document.onmouseup = null

    if (isCol) {
      $root.findAll(`[data-col="${$parent.data.col}"]`)
        .forEach(col => col.style.width = value + 'px')
    } else {
      $parent.css({height: value + 'px'})
    }

    $resizer.css({
      right: 0,
      bottom: 0
    })
  }
}
