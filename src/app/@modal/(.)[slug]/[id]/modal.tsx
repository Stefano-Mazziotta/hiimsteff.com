"use client";

import { type ElementRef, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { createPortal } from "react-dom";
import {
  CloseIcon,
  DownloadIcon,
  NavigateBefore,
  NavigateNext,
} from "@/ui/icons";

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
    <section className="fixed inset-0 flex h-full w-full items-center justify-center overflow-y-auto bg-black bg-opacity-95 p-2">
      <div className="flex flex-col justify-start gap-2 lg:max-w-4xl">
        <header className="flex justify-between">
          <div className="flex gap-5">
            <div className="flex fill-gray-400">
              <button>
                <NavigateBefore />
              </button>
              <button>
                <NavigateNext />
              </button>
            </div>
            <button className="fill-gray-400">
              <DownloadIcon />
            </button>
          </div>
          <button className="fill-gray-400" type="button" onClick={onDismiss}>
            <CloseIcon />
          </button>
        </header>
        {children}
      </div>
    </section>,
    document.getElementById("modal-root")!,
  );
}
