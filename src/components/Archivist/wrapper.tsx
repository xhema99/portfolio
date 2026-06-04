"use client";

import dynamic from "next/dynamic";

const ArchivistContent = dynamic(() => import("@/components/Archivist"), { ssr: false });

export default function ArchivistWrapper() {
  return <ArchivistContent />;
}
