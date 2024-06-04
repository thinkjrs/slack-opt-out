"use client";
import SlackOptOutLink from "@/components/SlackOptOutLink";
import SlackWorkspaceInput from "@/components/SlackWorkspaceInput";
import { useState, useEffect, useRef } from "react";

export default function InteractionContainer({}) {
  const [workspaceName, setWorkspaceName] = useState("");
  const [workspaceUrl, setWorkspaceUrl] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (workspaceName) {
      setWorkspaceUrl(`${workspaceName}.slack.com`);
    }
  }, [workspaceName, setWorkspaceUrl]);

  const onValueChange = (name: string) => {
    setWorkspaceName(name);
  };
  return (
    <div id="interaction-container" className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-2 lg:text-left">
      <SlackWorkspaceInput onValueChange={onValueChange} />
      <SlackOptOutLink workspaceUrl={workspaceUrl} />
    </div>
  );
}
