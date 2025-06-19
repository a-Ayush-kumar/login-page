"use client";

import { useSession } from "next-auth/react";
import { useRef, useState } from "react";
// import { FaCamera } from "react-icons/fa";
import Image from "next/image";

export default function Profile() {
  const { data: session } = useSession();
  const [preview, setPreview] = useState<string | null>(
    session?.user?.image || null
  );
  const fileRef = useRef<HTMLInputElement>(null);

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !session?.user?.email) return;

    setPreview(URL.createObjectURL(file));
    const form = new FormData();
    form.append("avatar", file);
    form.append("email", session.user.email);

    await fetch("/api/upload", { method: "POST", body: form });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white p-6 rounded-lg shadow max-w-sm w-full text-center">
        <div className="relative w-28 h-28 mx-auto">
          <Image
            src={preview || "/default-avatar.png"}
            alt="Profile picture"
            width={112} // 28 * 4
            height={112}
            className="rounded-full border-2 border-purple-600 object-cover w-28 h-28"
          />
          <button
            onClick={() => fileRef.current?.click()}
            title="Upload profile picture"
            aria-label="Upload profile picture"
            className="absolute bottom-0 right-0 bg-purple-600 p-2 rounded-full text-white"
          >
            {/* <FaCamera className="w-4 h-4" /> */}
            <span className="sr-only">Upload</span>
          </button>

          <input
            type="file"
            accept="image/*"
            ref={fileRef}
            onChange={handleUpload}
            className="hidden"
            aria-label="Upload profile picture"
          />
        </div>
        <h2 className="mt-4 text-xl font-semibold">{session?.user?.name}</h2>
        <p className="text-gray-500 text-sm">{session?.user?.email}</p>
        <p className="mt-2 text-gray-600 text-sm">
          Crafting beautiful UIs with data-driven precision.
        </p>
      </div>
    </div>
  );
}
