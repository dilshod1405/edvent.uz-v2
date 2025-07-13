"use client";

import React, { useState, useEffect } from "react";
import { SpinnerDotted } from "spinners-react";

export default function Loader({ duration = 1500, onFinish }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      if (onFinish) onFinish();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onFinish]);

  if (!loading) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(255, 255, 255, 0.8)",
        zIndex: 9999,
        padding: 20,
      }}
    >
      <SpinnerDotted
        size={100}
        thickness={150}
        speed={100}
        color="rgba(57, 65, 172, 1)"
        secondaryColor="rgba(200, 200, 255, 0.4)"
      />
    </div>
  );
}
