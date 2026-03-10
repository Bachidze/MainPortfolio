"use client";

export const useCustomCursor = () => {
  const onMouseEnter = () =>
    document.dispatchEvent(new CustomEvent("cursorHover", { detail: true }));
  const onMouseLeave = () =>
    document.dispatchEvent(new CustomEvent("cursorHover", { detail: false }));

  return { onMouseEnter, onMouseLeave };
};
