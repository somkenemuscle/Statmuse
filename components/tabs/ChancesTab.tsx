import StatsTable from "../ui/StatsTable"
import { players } from "@/data/player"


function ChancesTab() {
  const sortedPlayers = players
    .filter(player => player.chances > 0)
    .sort((a, b) => b.chances - a.chances)

  const rows = sortedPlayers.map(player => ({
    id: player.id,
    name: player.name,
    position: player.position,
    image: player.image,
    value: player.chances,
  }))

  return (
    <StatsTable
      title="Most Chances Created"
      rows={rows}
    />
  )
}

export default ChancesTab