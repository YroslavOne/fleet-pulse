import type { PropsWithChildren } from "react"

import { QueryProvider } from "./query-provider"
import { ThemeProvider } from "./theme-provider"

export function AppProviders({ children }: PropsWithChildren) {
    return (
        <ThemeProvider>
            <QueryProvider>{children}</QueryProvider>
        </ThemeProvider>
    )
}