import { Button } from "@/components/ui/button";
import { DownloadCloud, Windows, ListTree } from "lucide-react"; // Using ListTree for Linux/AppImage as a generic "package" icon

// Lucide doesn't have a direct Linux or AppImage icon. Windows is also not directly available.
// Using generic icons or SVGs would be better for platform-specific branding.
// For now, using available Lucide icons.
const WindowsIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 h-5 w-5">
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
    <line x1="3.27" y1="6.96" x2="12" y2="12.01"/>
    <line x1="12" y1="22.08" x2="12" y2="12"/>
    <line x1="20.73" y1="6.96" x2="12" y2="12.01"/>
    <line x1="12" y1="2.25" x2="12" y2="12"/>
  </svg>
);


const LinuxIcon = ListTree;


export function DownloadSection() {
  return (
    <section id="download" className="w-full py-16 md:py-24 lg:py-32 bg-secondary text-secondary-foreground">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <DownloadCloud className="h-16 w-16 text-accent" />
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Download LockMe
          </h2>
          <p className="max-w-[700px] text-muted-foreground md:text-lg">
            Get the latest version of LockMe for your operating system. Secure your files today!
          </p>
        </div>
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-center">
          <div className="flex flex-col items-center gap-2">
            <Button size="lg" className="w-64 bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg hover:shadow-xl transition-shadow">
              <WindowsIcon /> Download for Windows (.exe)
            </Button>
            <p className="text-xs text-muted-foreground">SHA-256: <span className="select-all">e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855</span></p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Button size="lg" className="w-64 bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg hover:shadow-xl transition-shadow">
              <LinuxIcon className="mr-2 h-5 w-5" /> Download for Linux (.AppImage)
            </Button>
            <p className="text-xs text-muted-foreground">SHA-256: <span className="select-all">a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2</span></p>
          </div>
        </div>
      </div>
    </section>
  );
}
