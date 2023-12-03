export const fetchEvents = async () => {
  try {
    const response = await fetch('./data.json')

    if (!response.ok) {
      throw new Error('Something went wrong')
    }

    const data = await response.json()
    return data
  } catch (error) {
    console.error('Error fetching events:', error.message)
  }
}

export const getFilteredevents = (jsonData, query, limit = 7) => {
  const { events } = jsonData

  return events.slice(0, limit).filter((event) => event.event.toLowerCase().includes(query.toLowerCase())
  )
}
