import { useEffect, useState } from 'react'

let cachedPhones = []
let lastFetchTime = null

export const usePhones = () => {
  const [phones, setPhones] = useState([])

  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const findPhones = async () => {
      try {
        const res = await fetch('https://front-test-api.herokuapp.com/api/product')
        if (res.status !== 200) throw new Error()
        const p = await res.json()
        cachedPhones = p
        lastFetchTime = new Date()
        setPhones(p)
        setLoading(false)
      } catch (e) {
        setError(true)
        setLoading(false)
      }
    }

    if (lastFetchTime !== null) {
      const now = new Date()
      const delta = now.getTime() - lastFetchTime.getTime()
      const hours = delta / (60 * 60 * 1000)
      if (hours > 1) {
        findPhones()
      } else {
        setPhones(cachedPhones)
        setLoading(false)
      }
    } else {
      findPhones()
    }
  }, [])

  return { phones, loading, error }
}
