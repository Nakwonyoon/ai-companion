"use client"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

export const SearchInput = () => {
    return(
        <div className="relative">
           <Search className="absolute h-4 w-4 top-3 left-4 text-muted-foreground"/>
        </div>
    )
}