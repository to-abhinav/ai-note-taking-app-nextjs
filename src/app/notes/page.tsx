import Note from "@/components/Note";
import prisma from "@/lib/db/prisma";
import { auth } from "@clerk/nextjs/server";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "mind-me | Notes",
};
async function NotesPage() {
  const { userId } = auth();
  if (!userId) {
    throw Error("userId undefined");
  }

  const allNotes = await prisma.note.findMany({
    where: {
      userId,
    },
  });
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {allNotes.map((note) => (
        <Note key={note.id} note={note} />
      ))}
      {allNotes.length === 0 && (
        <div className="flex items-center justify-center col-span-full font-bold text-4xl h-lvh">
          Such an empty space, add some notes
        </div>
      )}
    </div>
  );
}

export default NotesPage;
