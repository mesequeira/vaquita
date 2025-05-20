"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function MobileMenu() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="md:hidden">
            <Button variant="ghost" size="icon" className="text-gray-300" onClick={() => setIsOpen(true)}>
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
            </Button>

            {isOpen && (
                <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm">
                    <div className="container mx-auto p-4">
                        <div className="flex justify-end">
                            <Button variant="ghost" size="icon" className="text-gray-300" onClick={() => setIsOpen(false)}>
                                <X className="h-6 w-6" />
                                <span className="sr-only">Close menu</span>
                            </Button>
                        </div>

                        <nav className="mt-8 flex flex-col items-center gap-6">
                            <Link
                                href="#features"
                                className="text-xl text-gray-100 hover:text-white"
                                onClick={() => setIsOpen(false)}
                            >
                                Features
                            </Link>
                            <Link href="#pricing" className="text-xl text-gray-100 hover:text-white" onClick={() => setIsOpen(false)}>
                                Pricing
                            </Link>
                            <Link href="#blog" className="text-xl text-gray-100 hover:text-white" onClick={() => setIsOpen(false)}>
                                Blog
                            </Link>
                            <Link
                                href="#documentation"
                                className="text-xl text-gray-100 hover:text-white"
                                onClick={() => setIsOpen(false)}
                            >
                                Documentation
                            </Link>

                            <div className="mt-4 flex flex-col gap-4 w-full max-w-xs">
                                <Link
                                    href="/login"
                                    className="w-full text-center py-2 text-gray-300 hover:text-white border border-gray-800 rounded-md"
                                    onClick={() => setIsOpen(false)}
                                >
                                    Login
                                </Link>
                                <Button className="w-full bg-white text-black hover:bg-gray-200" onClick={() => setIsOpen(false)}>
                                    Sign up
                                </Button>
                            </div>
                        </nav>
                    </div>
                </div>
            )}
        </div>
    )
}
