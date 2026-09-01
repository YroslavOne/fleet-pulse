import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/equipment")({
    component: EquipmentPage,
})

function EquipmentPage() {
    return <h1>Equipment</h1>
}