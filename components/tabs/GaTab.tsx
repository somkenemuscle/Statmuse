import StatsTable from "../ui/StatsTable"
import { players } from "@/data/player"

function GaTab() {

  const sortedPlayers = players
    .map(player => ({
      ...player,
      ga: player.goals + player.assists, // 🔥 compute GA
    }))
    .filter(player => player.ga > 0)
    .sort((a, b) => b.ga - a.ga)

  const rows = sortedPlayers.map(player => ({
    id: player.id,
    name: player.name,
    position: player.position,
    image: player.image,
    value: player.ga, // 🔥 use computed value
  }))

  return (
    <StatsTable
      title="Most G/A"
      rows={rows}
    />
  )
}

export default GaTab