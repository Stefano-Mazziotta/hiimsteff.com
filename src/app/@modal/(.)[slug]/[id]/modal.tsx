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
    <section className="fixed inset-0 flex h-full w-full items-center justify-center overflow-y-auto bg-black bg-opacity-80">
      <div className="w-11/12 border-2 border-cyan-950 bg-black p-1 shadow-lg lg:w-6/12 lg:p-4">
        <header className="mb-1 flex justify-end">
          <button className="text-right" type="button" onClick={onDismiss}>
            X
          </button>
        </header>
        {children}
      </div>
    </section>,
    document.getElementById("modal-root")!,
  );
}
