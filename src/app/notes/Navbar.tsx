"use client";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "@/assets/Picsart_24-10-10_07-04-57-418.jpg";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import AddEditNoteDialog from "@/components/AddEditNoteDialog";
import { ThemeToggleButton } from "@/components/ThemeToggleButton";
import {dark} from "@clerk/themes"
import { useTheme } from "next-themes";
// import AIChatButton from "@/components/AIChatButton";
import AIChatButtonBubble from "@/components/AIChatButtonBubble";

function Navbar() {
  const theme = useTheme();
  const [showAddEditNoteDialog, setShowAddEditNoteDialog] = React.useState(false);
  return (
    <>
      <div className="p-4 shadow">
        <div className="m-auto flex max-w-7xl flex-wrap items-center justify-between">
          <Link href="/notes" className="flex items-center gap-1">
            <Image src={logo} alt="mind-me logo" width={40} height={40} />
            <span className="text-xl font-bold">mind-me</span>
          </Link>
          <div className="flex items-center gap-2">
            <Button onClick={() => setShowAddEditNoteDialog(true)}>
              <Plus size={20} className="mr-2" />
              Add Note
            </Button>
            <UserButton
              appearance={{
                baseTheme:(theme.theme === "dark" ? dark : undefined),
                elements: {
                  avatarBox: {
                    width: "2.5rem",
                    height: "2.5rem",
                    borderRadius: "50%",
                    border: "2px solid #0F172A",
                  },
                },
              }}
            />
            <ThemeToggleButton />
            {/* <AIChatButton /> */}
          </div>
        </div>
      </div>
      <AddEditNoteDialog open={showAddEditNoteDialog} setOpen={setShowAddEditNoteDialog} />
      <AIChatButtonBubble />
    </>
  );
}

export default Navbar;
