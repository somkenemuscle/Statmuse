import StatsTable from "../ui/StatsTable"
import { players } from "@/data/player"

export default function ChancesMissedTab() {
  const sortedPlayers = players
    .filter(player => player.chancesMissed > 0)
    .sort((a, b) => b.chancesMissed - a.chancesMissed)

  const rows = sortedPlayers.map(player => ({
    id: player.id,
    name: player.name,
    position: player.position,
    image: player.image,
    value: player.chancesMissed,
  }))

  return (
    <StatsTable
      title="Most Chances Missed"
      rows={rows}
    />
  )
}
