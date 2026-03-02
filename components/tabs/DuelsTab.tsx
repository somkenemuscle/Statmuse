import StatsTable from "../ui/StatsTable"
import { players } from "@/data/player"

function DuelsTab() {
  const sortedPlayers = players
    .filter(player => player.duels > 0)
    .sort((a, b) => b.duels - a.duels)

  const rows = sortedPlayers.map(player => ({
    id: player.id,
    name: player.name,
    position: player.position,
    image: player.image,
    value: player.duels,
  }))

  return (
    <StatsTable
      title="Most Duels Won"
      rows={rows}
    />
  )
}

export default DuelsTab