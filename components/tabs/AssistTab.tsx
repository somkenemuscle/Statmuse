import StatsTable from "../ui/StatsTable"
import { players } from "@/data/player"

export default function AssistTab() {
  const sortedPlayers = players
    .filter(player => player.assists > 0)
    .sort((a, b) => b.assists - a.assists)

  const rows = sortedPlayers.map(player => ({
    id: player.id,
    name: player.name,
    position: player.position,
    image: player.image,
    value: player.assists,
  }))

  return (
    <StatsTable
      title="Top Assists"
      rows={rows}
    />
  )
}
