import toast, { Toaster } from "react-hot-toast";

const notify = () =>
  toast.error("You need to enter your workspace name!", {
    icon: "🤦",
    style: {
      borderRadius: "10px",
      background: "#333",
      color: "#fff",
    },
  });

export default function SlackOptOutLink({
  workspaceUrl,
}: {
  workspaceUrl?: string;
}) {
  const emailUrl = `mailto:feedback@slack.com?subject=Slack%20Global%20model%20opt-out%20request.&body=Please%20exclude%20our%20Customer%20Data%20from%20Slack%20global%20models.%20This%20is%20an%20opt-out%20request%20as%20outlined%20in%20your%20Privacy%20Terms%20here%3A%20https%3A%2F%2Fslack.com%2Ftrust%2Fdata-management%2Fprivacy-principles.%0D%0A%0D%0AMy%20workspace%20URL%20is%3A%20https%3A%2F%2F${workspaceUrl}%0D%0A%0D%0AThank%20you!`;
  return (
    <>
      <Toaster />
      <a
        href={workspaceUrl !== "" ? emailUrl : undefined}
        onClick={workspaceUrl !== "" ? undefined : notify}
        className="group rounded-lg border border-transparent px-5 pb-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 cursor-pointer"
        target="_blank"
        rel="noopener noreferrer"
        aria-disabled={workspaceUrl !== "" ? false : true}
      >
        <h2 className="mb-3 text-2xl font-semibold">
          Email template{" "}
          <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            -&gt;
          </span>
        </h2>
        <p className="m-0 max-w-[30ch] text-sm opacity-50">
          {`Automatically open up an email that is ready for Slack's
        opt-out requirements.`}
        </p>
      </a>
    </>
  );
}
