"use client";

import { type ElementRef, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { createPortal } from "react-dom";

export function Modal({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const dialogRef = useRef<ElementRef<"dialog">>(null);

  useEffect(() => {
    if (!dialogRef.current?.open) {
      dialogRef.current?.showModal();
    }
  }, []);

  function onDismiss() {
    router.back();
  }

  return createPortal(
    <div className="fixed z-50 inset-0 bg-black bg-opacity-80 overflow-y-auto h-full w-full flex justify-center items-center px-4">
      <section className="h-full flex flex-col justify-center">
        <header className="flex justify-end mb-1">
          <button className="text-right" type="button" onClick={onDismiss}>
            X
          </button>
        </header>
        {children}
      </section>
    </div>,
    document.getElementById("modal-root")!
  );
}
