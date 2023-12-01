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
