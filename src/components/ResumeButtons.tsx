// components/ResumeButtons.tsx
"use client";

import { Button } from "@/components/ui/button";
import { Eye, Download } from "lucide-react";

const ResumeButtons = () => {
  return (
    <div className="flex flex-wrap gap-4">
      {/* View Resume Button */}
      <a
        href="/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button
          variant="outline"
          className="flex items-center hover:bg-zinc-800 hover:cursor-pointer gap-2 rounded-full"
        >
          <Eye className="w-4 h-4" />
          View Resume
        </Button>
      </a>

      
    </div>
  );
};

export default ResumeButtons;
