// ==UserScript==
// @name          SWFChan
// @include       http://swfchan.org/*
// @description   Bigger images and some styling
// ==/UserScript==

const styleSheet = `
#obdy {
    width: 100%;
    position: absolute;
    padding: 0;
    margin: 0;
    overflow: auto;
}
#threads {
    width: 100%;
    padding: 0;
    margin: 0;
}
#threads tbody {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
#org #threads #fb #ll {
    width: 5rem;
}
#org #mr {
    height: 20rem;
    display: flex;
}
#mr tr {
    display: flex;
    flex-direction: row;
    width: 100%;
    position: relative;
}
#org #threads #fb #mm {
    width: auto;
    padding: 0;
    margin: 0;
}
`

;(() => {
  const s = document.createElement('style')
  s.type = 'text/css'
  s.innerHTML = styleSheet
  ;(document.head || document.documentElement).appendChild(s)
})()

const linkToImages = document.querySelectorAll('#threads #mm a')
linkToImages.forEach(({ firstChild, href }) => {
  let img = firstChild
  return (img.src = href) + Object.assign(img.style, { width: '30rem' })
})
