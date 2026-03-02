import StatsTable from "../ui/StatsTable"
import { players } from "@/data/player"

function DribblesTab() {
  const sortedPlayers = players
    .filter(player => player.dribbles > 0)
    .sort((a, b) => b.dribbles - a.dribbles)

  const rows = sortedPlayers.map(player => ({
    id: player.id,
    name: player.name,
    position: player.position,
    image: player.image,
    value: player.dribbles,
  }))

  return (
    <StatsTable
      title="Most Dribbles Completed"
      rows={rows}
    />
  )
}

export default DribblesTab