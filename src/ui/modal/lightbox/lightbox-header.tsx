"use client";

import { useRouter } from "next/navigation";
import { CloseIcon, DownloadIcon, ShareIcon } from "../../icons";

export function LightboxHeader() {
  const router = useRouter();

  function onDismiss() {
    router.back();
  }

  return (
    <header className="flex justify-between">
      <div className="flex gap-1">
        <button className="fill-gray-400">
          <DownloadIcon />
        </button>
        <button className="fill-gray-400">
          <ShareIcon />
        </button>
      </div>
      <button
        className="fill-gray-400"
        type="button"
        id="btn-close"
        onClick={onDismiss}
      >
        <CloseIcon />
      </button>
    </header>
  );
}
