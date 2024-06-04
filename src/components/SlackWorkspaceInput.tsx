"use client";
import { useRef } from "react";

export default function SlackWorkspaceInput({
  onValueChange,
}: {
  onValueChange: (value: string) => void;
}) {
  const inputRef = useRef<HTMLInputElement>(null);
  const handleChange = () => {
    if (inputRef.current) {
      onValueChange(inputRef.current.value);
    }
  };
  return (
    <div className="group rounded-lg border border-gray-200 dark:border-gray-800 px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
      <h2 className="mb-3 text-2xl font-semibold">
        Your slack workspace{" "}
        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none"></span>
      </h2>
      <input
        type="text"
        ref={inputRef}
        placeholder="<workspace-name>"
        required
        className="m-0 max-w-[30ch] text-sm opacity-90 rounded-md dark:bg-transparent dark:text-white border dark:border-white border-gray-500 py-2 px-1"
        onInput={handleChange}
      />
      <p className="m-0 max-w-[30ch] text-sm opacity-50 pt-2">
        Normally your workspace URL is{" "}
        <span className="italic">workspace-name.slack.com</span>. Here we only
        need your <span className="italic font-bold">workspace-name</span>.
      </p>
    </div>
  );
}
