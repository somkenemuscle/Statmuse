"use client"

import Image from "next/image"
import { StatRow } from "@/types/statRow"

interface Props {
    title: string
    rows: StatRow[]
}

export default function StatsTable({ title, rows }: Props) {
    return (
        <div>
            <h2 className="text-xl font-semibold mb-6">{title}</h2>

            <div className="divide-y border rounded-xl overflow-hidden">
                {rows.map((player, index) => (
                    <div
                        key={player.id}
                        className="flex items-center justify-between px-4 py-3 hover:bg-gray-50 transition"
                    >
                        {/* Left */}
                        <div className="flex items-center gap-4">

                            <span className="w-6 text-gray-500">
                                {index + 1}
                            </span>

                            <div className="flex items-center gap-3">
                                <div className="relative w-12 h-12 rounded-full overflow-hidden shrink-0">
                                    <Image
                                        src={player.image}
                                        alt={player.name}
                                        fill
                                        sizes="48px"
                                        className="object-cover"
                                    />
                                </div>

                                <div>
                                    <p className="font-medium">
                                        {player.name}
                                    </p>
                                    <p className="text-sm text-gray-500">
                                        {player.position}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Right */}
                        <div className="text-lg font-semibold">
                            {player.value}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}