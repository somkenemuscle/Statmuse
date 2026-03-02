import StatsTable from "../ui/StatsTable"
import { players } from "@/data/player"


export default function GoalTab() {
    const sortedPlayers = players
        .filter(player => player.goals > 0)
        .sort((a, b) => b.goals - a.goals)

    const rows = sortedPlayers.map(player => ({
        id: player.id,
        name: player.name,
        position: player.position,
        image: player.image,
        value: player.goals,
    }))

    return (
        <StatsTable
            title="Top Goals"
            rows={rows}
        />
    )
}