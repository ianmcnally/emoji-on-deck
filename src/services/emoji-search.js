export const getEmojisForQuery = query => {
  if (!query)
    return
  return fetch(`http://emoji.getdango.com/api/emoji?q=${query}`)
    .then(r => r.json())
    .then(({ results }) => results.map(({ text }) => text))
}
