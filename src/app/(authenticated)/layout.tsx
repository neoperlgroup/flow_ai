import { AuthenticatedProviders } from "@/features/globals/providers";
import { MainMenu } from "@/features/main-menu/main-menu";
import { AI_NAME } from "@/features/theme/theme-config";
import { cn } from "@/ui/lib";

export const dynamic = "force-dynamic";

export const metadata = {
  title: AI_NAME,
  description: AI_NAME,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const renderChildren = React.Children.map(children, (child) => {
    // Check if the child is the "extensions" component
    if (React.isValidElement(child) && child.type === "Extensions") {
      return null; // Return null if you want to hide it
    }
    return child;
  });

  return (
    <AuthenticatedProviders>
      <div className={cn("flex flex-1 items-stretch")}>
        <MainMenu />
        <div className="flex-1 flex">{renderChildren}</div>
      </div>
    </AuthenticatedProviders>
  );
}
