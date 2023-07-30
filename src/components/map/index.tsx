import { MapContainer, TileLayer } from 'react-leaflet'
import React from 'react'
import L from 'leaflet'

import marker2x from 'leaflet/dist/images/marker-icon-2x.png'
import shadow from 'leaflet/dist/images/marker-shadow.png'
import marker from 'leaflet/dist/images/marker-icon.png'
import 'leaflet/dist/leaflet.css'
import { useWeatherStory } from '@/hooks/use-weather-story'

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.mergeOptions({
  iconUrl: marker,
  iconRetinaUrl: marker2x,
  shadowUrl: shadow
})

interface MapProps {
  center?: number[]
}

const Map: React.FC<MapProps> = ({ center }) => {
  const { loading } = useWeatherStory()

  const position = React.useMemo(() => center, [loading, center])

  if (loading) {
    return null
  }

  return (
    <MapContainer
    center={position as L.LatLngExpression ?? [51, -0.09]}
    zoom={position ? 14 : 2}
    scrollWheelZoom={false}
    className="h-full w-full absolute z-0"
  >
    <TileLayer
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
  </MapContainer>
  )
}

export default Map
