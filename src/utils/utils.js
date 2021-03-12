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

const getCitiesSelect = (citiesToStateMapping, selectedState) => {
  try {
    let cities = citiesToStateMapping[selectedState]
    return cities.map(city => {
      return { value: city, label: city }
    })
  } catch {
    console.warn('Incorrect selectedState value passed to getCitiesSelect.')
  }
}

export {
  parseSelectOptions,
  getCitiesSelect,
}