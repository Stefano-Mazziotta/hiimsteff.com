import { useRouter } from "next/navigation";
import {
  CloseIcon,
  DownloadIcon,
  NavigateBefore,
  NavigateNext,
} from "../icons";

export function ModalHeader() {
  const router = useRouter();

  function onDismiss() {
    router.back();
  }

  return (
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
