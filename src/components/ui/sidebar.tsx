'use client'
import React from 'react'
import { Nav } from './nav'
import {ChevronRight, LayoutDashboard, ListStart, LogOut, Star, User,} from "lucide-react"
import { Button } from './button'
import { useWindowWidth } from '@react-hook/window-size'

type Props = {}

export default function Sidebar({}: Props) {

    const [isCollapsed, setIsCollapsed] = React.useState(false)

    const onlyWidth = useWindowWidth()
    const mobileWidth = onlyWidth < 768

    function toggleSidebar(){
        setIsCollapsed(!isCollapsed)
    }
    return (
        <div className='relative min-w-[80px] border-r px-3 pb-10 pt-24 hidden lg:block'>
            {!mobileWidth &&
                <div className='absolute right-[-20px] top-7'>
                    <Button variant='secondary' className='rounded-full p-2' onClick={toggleSidebar}>
                        <ChevronRight/>
                    </Button>
                </div>
            }

            <Nav
              isCollapsed={mobileWidth ? true : isCollapsed}
              links={[
                {
                  title: "Home",
                  href: "/user/dashboard",
                  icon: LayoutDashboard,
                  variant: "default",
                },
                {
                  title: "Reviews",
                  href: "/users",
                  icon: Star,
                  variant: "ghost",
                },
                {
                  title: "Listing",
                  href: "/user/listing",
                  icon: ListStart,
                  variant: "ghost",
                 },
                  {
                  title: "Profile",
                  href: "/profile",
                  icon: User,
                  variant: "ghost",
                },
                {
                  title: "Logout",
                  href: "/logout",
                  icon: LogOut,
                  variant: "ghost",
                },
              ]}
            />

        </div>
    )
}