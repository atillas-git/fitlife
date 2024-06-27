'use client'
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/dropdown";
import { Link, User } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import menuItems from "../../config/navbar";
import {signOut} from 'next-auth/react'
import { FaChevronDown,FaUser } from "react-icons/fa";
import { Session } from "next-auth";
import { IoIosSettings } from "react-icons/io";
import { GoSignOut } from "react-icons/go";
interface IProps {
  session:Session | null
}
const Header = ({session}:IProps) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      className="bg-zinc-800  text-zinc-50 h-[10vh]"
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <p className="font-bold text-inherit">
            <Link href="/" className="text-zinc-50 text-xl">
              FitLife
            </Link>
          </p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-7" justify="center">
        {menuItems.map((item, index) => {
          return (
            <NavbarItem key={index + item.key}>
              <Link href={item.href} className="text-zinc-50">
                {item.label}
              </Link>
            </NavbarItem>
          );
        })}
      </NavbarContent>
      <NavbarContent justify="end">
        {session ? (
          <Dropdown>
            <DropdownTrigger>
              <div className="flex gap-2 items-center cursor-pointer">
                <User
                  avatarProps={{
                    src: session.user?.image || undefined,
                  }}
                  name={session.user?.name}
                  description={session.user?.email}
                  classNames={{
                    description: "text-white",
                  }}
                />
                <FaChevronDown className="w-2 h-2" />
              </div>
            </DropdownTrigger>
            <DropdownMenu>
              <DropdownItem>
                <div className="flex items-center gap-2">
                  <FaUser/>
                  Profile
                </div>
              </DropdownItem>
              <DropdownItem>
                <div className="flex items-center gap-2">
                  <IoIosSettings/>
                  Settings
                </div>
              </DropdownItem>
              <DropdownItem
                className="text-red-500"
                onClick={() => signOut({callbackUrl:"/signin"})}
              >
                <div className="flex items-center gap-2">
                  <GoSignOut/>
                  Sign Out
                </div>
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        ) : (
          <>
            <NavbarItem className="hidden lg:flex">
              <Link className="text-zinc-50 cursor-pointer" href="/signup">
                Sign Up
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Button
                as={Link}
                className="bg-zinc-200"
                href="/signin"
                variant="flat"
              >
                Signin
              </Button>
            </NavbarItem>
          </>
        )}
      </NavbarContent>
      <NavbarMenu className="px-7 py-12 bg-zinc-300">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              href={item.href}
              size="lg"
            >
              {item.label}
            </Link>
          </NavbarMenuItem>
        ))}
        {session && (
          <NavbarMenuItem>
            <p
              className="text-red-500 cursor-pointer"
              onClick={() => signOut({callbackUrl:"/signin"})}
            >
              Sign Out
            </p>
          </NavbarMenuItem>
        )}
      </NavbarMenu>
    </Navbar>
  );
};

export default Header;