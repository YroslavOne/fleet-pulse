import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/maintenance")({
    component: MaintenancePage,
})

function MaintenancePage() {
    return <h1>Maintenance</h1>
}