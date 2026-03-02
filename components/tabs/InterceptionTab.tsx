import StatsTable from "../ui/StatsTable"
import { players } from "@/data/player"


function InterceptionTab() {
  const sortedPlayers = players
    .filter(player => player.interceptions > 0)
    .sort((a, b) => b.interceptions - a.interceptions)

  const rows = sortedPlayers.map(player => ({
    id: player.id,
    name: player.name,
    position: player.position,
    image: player.image,
    value: player.interceptions,
  }))

  return (
    <StatsTable
      title="Most Interceptions"
      rows={rows}
    />
  )
}

export default InterceptionTab