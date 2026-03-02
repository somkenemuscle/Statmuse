import StatsTable from "../ui/StatsTable"
import { players } from "@/data/player"

function DistanceCoveredTab() {
  const sortedPlayers = players
    .filter(player => player.distanceCovered > 0)
    .sort((a, b) => b.distanceCovered - a.distanceCovered)

  const rows = sortedPlayers.map(player => ({
    id: player.id,
    name: player.name,
    position: player.position,
    image: player.image,
    value: player.distanceCovered,
  }))

  return (
    <StatsTable
      title="Most Distance Covered (km/h)"
      rows={rows}
    />
  )
}

export default DistanceCoveredTab