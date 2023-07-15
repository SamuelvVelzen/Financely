import { ArrowUpTrayIcon } from "@heroicons/react/24/outline";
import React, { useRef, useState } from "react";
import { Button, ThemeColorEnum } from "../button";

export type IFileType = "csv" | "png";

type DragAndDropProps = {
  name: string;
};

export function DragAndDrop({ name }: DragAndDropProps) {
  const [content, setContent] = useState<FileList | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const dropHandler = (event: React.DragEvent<HTMLDivElement>) => {
    allowDrop(event);

    const data = event.dataTransfer.files;

    setContent(data);
    setInputRefData(data);
  };

  const allowDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const data = e.target.files;

    setContent(data);
  };

  const handleEmptyClick = () => {
    setContent(null);
    setInputRefData(null);
  };

  const setInputRefData = (files: FileList | null) => {
    if (inputRef.current?.files) {
      inputRef.current.files = files;
    }
  };

  return (
    <>
      <div
        className="flex min-h-[250px] flex-col items-center justify-center rounded-3xl border border-dashed bg-lightgrey"
        onDragOver={allowDrop}
        onDrop={dropHandler}
      >
        {content &&
          Array.from(content).map((file, index) => (
            <div key={index}>{file.name}</div>
          ))}

        {!content && (
          <div className="flex flex-col items-center justify-center">
            <ArrowUpTrayIcon className="h-10 w-10" />
            <p> Drop csv file</p>
          </div>
        )}
        <div>
          <label
            htmlFor={name}
            className="cursor-pointer text-primary underline"
          >
            Or click here {content && "to change the files"}
          </label>
          <input
            ref={inputRef}
            id={name}
            name={name}
            type="file"
            onChange={(e) => handleInputChange(e)}
            className="hidden"
          />
        </div>

        {content && (
          <Button
            theme={ThemeColorEnum.primary}
            onClick={() => handleEmptyClick()}
          >
            Empty
          </Button>
        )}
      </div>
    </>
  );
}
