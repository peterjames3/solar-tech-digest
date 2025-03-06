"use client";
import { useState, useEffect } from "react";
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  WhatsappShareButton,
  EmailShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  WhatsappIcon,
  EmailIcon,
} from "react-share";

export default function SocialShare({ title }: { title: string }) {
  const [postUrl, setPostUrl] = useState("");
  const [isCopied, setIsCopied] = useState(false);
  const Url = window.location.href;

  const copyToClipBoard = async () => {
    try {
      await navigator.clipboard.writeText(Url);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000); //resetting  after 2 seconds
    } catch (err) {
      console.error("failed to copy", err);
    }
  };

  useEffect(() => {
    setPostUrl(Url);
  }, []);

  const shareButtons = [
    { Component: FacebookShareButton, Icon: FacebookIcon, name: "Facebook" },
    { Component: TwitterShareButton, Icon: TwitterIcon, name: "Twitter" },
    { Component: LinkedinShareButton, Icon: LinkedinIcon, name: "LinkedIn" },
    { Component: WhatsappShareButton, Icon: WhatsappIcon, name: "WhatsApp" },
    { Component: EmailShareButton, Icon: EmailIcon, name: "Email" },
  ];

  return (
    <div>
      <h3 className="text-2xl font-semibold mb-2">Share this post:</h3>
      <div className="flex flex-col space-y-4">
        {shareButtons.map(({ Component, Icon, name }) => (
          <Component key={name} url={postUrl} title={title}>
            <Icon size={32} round />
          </Component>
        ))}
        {/* Copy Link */}
        <button onClick={copyToClipBoard} className="text-sm font-medium">
          {isCopied ? "Copied!" : "Copy Link"}
        </button>
      </div>
    </div>
  );
}
