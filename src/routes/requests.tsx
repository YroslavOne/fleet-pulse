import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/requests")({
    component: RequestsPage,
})

function RequestsPage() {
    return <h1>Requests</h1>
}