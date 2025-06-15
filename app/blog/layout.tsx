import React from "react"

type props = {
    children: React.ReactNode
}

export default function BlogLayout({ children }: props) {
    return (
        <section>{children}</section>
    )
}