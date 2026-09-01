import { createFileRoute } from "@tanstack/react-router"
import {Card} from "@/shared/ui/card.tsx";
import {Button} from "@base-ui/react";

export const Route = createFileRoute("/dashboard")({
    component: DashboardPage,
})

function DashboardPage() {
    return <>
    <Card title="Dashboard"></Card>
    <Button >hi</Button>
    </>
}