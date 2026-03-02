'use client'

import { useState } from 'react'
import AssistTab from '@/components/tabs/AssistTab'
import ChancesTab from '@/components/tabs/ChancesTab'
import DribblesTab from '@/components/tabs/DribblesTab'
import DuelsTab from '@/components/tabs/DuelsTab'
import InterceptionTab from '@/components/tabs/InterceptionTab'
import GoalTab from '@/components/tabs/GoalTab'
import GaTab from '@/components/tabs/GaTab'
import ChancesMissedTab from '@/components/tabs/ChanceMissedTab'


export default function Home() {
  const [activeTab, setActiveTab] = useState("goals")

  const tabs = [
    { id: "goals", label: "Goals" },
    { id: "assists", label: "Assists" },
    { id: "ga", label: "G/A" },
    { id: "chances", label: "Chances Created" },
    { id: "dribbles", label: "Dribbles" },
    { id: "duels", label: "Duels" },
    { id: "interceptions", label: "Interceptions" },
    { id: "missed", label: "Chances Missed" },

  ]

  return (
    <div className="max-w-6xl mx-auto px-6 py-8">

      {/* Stats Header */}
      <div className="mb-8 border-b pb-6">
        <h1 className="text-4xl font-semibold">
          Aptech Statmuse • 2026
        </h1>
        <p className="text-gray-500 mt-2">
          Overall Stats For Aptech Football
        </p>
      </div>

      {/* Tabs Navigation */}
      <div className="flex gap-6 border-b mb-8 overflow-x-auto">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`pb-3 whitespace-nowrap cursor-pointer ${activeTab === tab.id
              ? "border-b-2 border-black font-medium"
              : "text-gray-500 hover:text-black"
              }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="min-h-75">
        {activeTab === "goals" && <GoalTab />}
        {activeTab === "assists" && <AssistTab />}
        {activeTab === "chances" && <ChancesTab />}
        {activeTab === "dribbles" && <DribblesTab />}
        {activeTab === "duels" && <DuelsTab />}
        {activeTab === "interceptions" && <InterceptionTab />}
        {activeTab === "ga" && <GaTab />}
        {activeTab === "missed" && <ChancesMissedTab />}

      </div>
    </div>
  )
}
