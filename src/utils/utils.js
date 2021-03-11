const parseSelectOptions = (options) => {
  const array = []
  const parser = new DOMParser()
  const doc = parser.parseFromString(options, 'text/html')
  const elements = doc.getElementsByTagName('option')
  for (const el of elements) {
    array.push({ value: el.value, label: el.text })
  }
  return array
}

export {
  parseSelectOptions
}