import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/equipment/$equipmentId")({
  component: EquipmentDetailsPage,
})

function EquipmentDetailsPage() {
  return <h1>Equipment Details</h1>
}