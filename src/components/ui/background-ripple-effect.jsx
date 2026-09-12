"use client";;
import React, { useMemo, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export const BackgroundRippleEffect = ({
  rows = 8,
  cols = 27,
  cellSize = 120 // Even larger grid boxes
}) => {
  const [clickedCell, setClickedCell] = useState(null);
  const [rippleKey, setRippleKey] = useState(0);
  const ref = useRef(null);

  return (
    <DivGrid
      ref={ref}
      className={cn(
        "fixed top-0 left-0 w-screen h-screen z-0",
        // Reduce gradient effect on top and bottom
        "mask-radial-from-10% mask-radial-at-top opacity-300",
        // Light mode: ultra-light lines
        "[--cell-border-color:rgba(30_41_59_0.02)] [--cell-fill-color:rgba(59_130_246_0.01)] [--cell-shadow-color:rgb(148_163_184)]",
        // Dark mode: more visible lines and background color
        "dark:[--cell-border-color:rgba(255,255,255,0.18)] dark:[--cell-fill-color:rgba(0,0,0,0.10)] dark:[--cell-shadow-color:transparent] dark:bg-[#0C1117]"
      )}
      rows={rows}
      cols={cols}
      cellSize={cellSize}
      borderColor="var(--cell-border-color)"
      fillColor="var(--cell-fill-color)"
      clickedCell={clickedCell}
      onCellClick={(row, col) => {
        setClickedCell({ row, col });
        setRippleKey((k) => k + 1);
      }}
      interactive
    />
  );
};

const DivGrid = ({
  className,
  rows = 7,
  cols = 30,
  cellSize = 56,
  borderColor = "#3f3f46",
  fillColor = "rgba(0,0,0,0.3)",
  clickedCell = null,
  onCellClick = () => { },
  interactive = true
}) => {
  const cells = useMemo(() => Array.from({ length: rows * cols }, (_, idx) => idx), [rows, cols]);

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: `repeat(${cols}, ${cellSize}px)`,
    gridTemplateRows: `repeat(${rows}, ${cellSize}px)`,
    width: "100vw",
    height: "100vh",
    justifyContent: "center",
    alignContent: "center",
  };

  return (
    <div className={cn("relative z-[3]", className)} style={gridStyle}>
      {cells.map((idx) => {
        const rowIdx = Math.floor(idx / cols);
        const colIdx = idx % cols;
        const distance = clickedCell
          ? Math.hypot(clickedCell.row - rowIdx, clickedCell.col - colIdx)
          : 0;
        const delay = clickedCell ? Math.max(0, distance * 55) : 0; // ms
        const duration = 200 + distance * 80; // ms

        const style = clickedCell
          ? {
            "--delay": `${delay}ms`,
            "--duration": `${duration}ms`,
          }
          : {};

        return (
          <div
            key={idx}
            className={cn(
              // Make lines ultra-light in light mode
              "cell relative border-[0.5px] opacity-8 transition-opacity duration-150 will-change-transform hover:opacity-20",
              "dark:opacity-60",
              clickedCell && "animate-cell-ripple [animation-fill-mode:none]",
              !interactive && "pointer-events-none"
            )}
            style={{
              backgroundColor: fillColor,
              borderColor: borderColor,
              ...style,
            }}
            onClick={
              interactive ? () => onCellClick?.(rowIdx, colIdx) : undefined
            } />
        );
      })}
    </div>
  );
};
