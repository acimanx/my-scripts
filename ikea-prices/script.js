document.querySelectorAll('.productDetails').forEach(product => {
    const priceSpan = product.querySelectorAll('span.price')
    if (priceSpan.length > 1) {
      const familyPrice = []
      priceSpan[0].innerText.replace(/(?:[$€£]+\s+?)(\d+[,.]?\d+)/g, (m, matchedString) => {
        familyPrice.push(matchedString * 1)
      })
  
      const normalPrice = []
      priceSpan[1].innerText.replace(/(?:[$€£]+\s+?)(\d+[,.]?\d+)/g, (m, matchedString) => {
        normalPrice.push(matchedString * 1)
      })
  
      console.log(normalPrice - familyPrice)
    }
  })
  
