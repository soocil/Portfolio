"use client";

import { useState } from "react";
import {
  Mail,
  Linkedin,
  Github,
  Twitter,
  Instagram,
  Facebook,
  Copy,
  Check,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function SocialContact() {
  const [hovered, setHovered] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const [email, setEmail] = useState("tezzzs990@gmail.com");

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setEmail("Copied to Clipboard");
    setTimeout(() => {
      setCopied(false);
      setEmail(email);
    }, 1500);
  };

  const socialLinks = [
    {
      id: "email",
      icon: Mail,
      label: email,
      href: `mailto:${email}`,
      color: "text-green-600 hover:text-green-700",
    },
    {
      id: "linkedin",
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/sushil-regmi-441965209/",
      color: "text-blue-600 hover:text-blue-700",
    },
    {
      id: "github",
      icon: Github,
      label: "GitHub",
      href: "https://github.com/sooocil",
      color: "hover:text-gray-900",
    },
    {
      id: "twitter",
      icon: Twitter,
      label: "X",
      href: "https://twitter.com/soocil5",
      color: "hover:text-gray-800",
    },
    {
      id: "instagram",
      icon: Instagram,
      label: "Instagram",
      href: "https://www.instagram.com/suucillmee/",
      color: "text-pink-500 hover:text-pink-600",
    },
    {
      id: "facebook",
      icon: Facebook,
      label: "Facebook",
      href: "https://www.facebook.com/",
      color: "text-blue-600 hover:text-pink-600",
    },
  ];

  return (
    <div className="relative py-12 px-4 max-w-4xl mx-auto">
      {/* Title */}
      <div className="text-center mb-10">
        <h3 className="text-3xl font-bold mb-2">Let's Connect</h3>
        <p className="text-muted-foreground">
          Choose your preferred way to reach out
        </p>
      </div>

      {/* Social Buttons */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {socialLinks.map((link) => {
          const Icon = link.icon;
          const isEmail = link.id === "email";

          return (
            <div
              key={link.id}
              onMouseEnter={() => setHovered(link.id)}
              onMouseLeave={() => setHovered(null)}
              className="group relative"
            >
              <Button
                variant="outline"
                size="lg"
                className="w-full justify-start gap-4 border relative fade-in-out duration-300  hover:border-gray-300"
              >
                <Icon className={`w-5 h-5 ${link.color}`} />
                {isEmail ? (
                  <div className="flex items-center justify-between w-full">
                    <span className="font-medium text-green-600">
                      {link.label}
                    </span>
                    <span
                      onClick={handleCopyEmail}
                      className="ml-2 hover:cursor-pointer"
                      title="Copy to clipboard"
                    >
                      {copied ? (
                        <Check className="w-4 h-4 text-green-600" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </span>
                  </div>
                ) : (
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-left w-full"
                  >
                    {link.label}
                  </a>
                )}
              </Button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
