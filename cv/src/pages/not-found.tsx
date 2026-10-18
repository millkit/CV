import { Button } from "@/components/ui/button";
import { AlertTriangle } from "lucide-react";
import { type FallbackProps } from "react-error-boundary";

const NotFoundPage = ({ resetErrorBoundary, error }: FallbackProps) => {
  const errorMessage = error instanceof Error ? error.message : "Unknown error";
  const errorDigest =
    typeof error === "object" && error !== null && "digest" in error
      ? (error as { digest?: string }).digest
      : undefined;

  return (
    <section className="from-background to-muted/30 flex h-dvh flex-col items-center justify-center rounded-lg bg-linear-to-b p-6">
      <div className="container flex max-w-md flex-col items-center justify-center gap-6 px-4 py-16 text-center">
        <div className="rounded-full bg-red-100 p-6">
          <AlertTriangle className="h-12 w-12 text-red-600" />
        </div>
        <h2 className="text-3xl font-bold tracking-tight">
          Something went wrong
        </h2>

        <p className="text-muted-foreground">
          An unexpected error occurred. This is likely a temporary issue that we
          are working on fixing.
        </p>
        <div className="bg-muted w-full overflow-auto rounded-md p-4 text-left text-sm">
          <p className="font-mono text-red-500">{errorMessage}</p>
          {errorDigest && (
            <p className="text-muted-foreground mt-2 font-mono text-xs">
              Error ID: {errorDigest}
            </p>
          )}
        </div>

        <Button onClick={resetErrorBoundary}>Try again</Button>
      </div>
    </section>
  );
};

export default NotFoundPage;
