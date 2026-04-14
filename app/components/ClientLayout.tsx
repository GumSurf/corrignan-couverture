"use client";

import { ReactNode } from "react";
import AnimatedPage from "./AnimatedPage";

interface ClientLayoutProps {
  children: ReactNode;
}

export default function ClientLayout({ children }: ClientLayoutProps) {
  return (
    <>
      <AnimatedPage>{children}</AnimatedPage>
    </>
  );
}