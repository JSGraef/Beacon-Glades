import React, { useState, useEffect, useRef } from "react"

const HoleMap = ({ holeNumber }) => {
  const ImportedHoleRef = useRef(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    const importHoleMap = async () => {
      try {
        const { default: namedImport } = await import(
          `./assets/Hole${holeNumber}.svg`
        )
        ImportedHoleRef.current = namedImport
      } catch (err) {
        throw err
      } finally {
        setLoading(false)
      }
    }
    importHoleMap()
  }, [holeNumber])

  if (!loading && ImportedHoleRef.current) {
    const { current: ImportedHoleMap } = ImportedHoleRef
    return <ImportedHoleMap />
  }

  return null
}

export default HoleMap
