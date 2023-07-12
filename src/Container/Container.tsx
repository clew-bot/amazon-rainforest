import React, { useEffect, useRef, useState } from "react";
import { useScroll, useTransform } from "framer-motion";
import { useWindowSize } from "../hook-use-window-size";

interface ContainerProps {
    children: React.ReactNode;
    }

const Container = ({ children }: ContainerProps) => {
    const windowSize = useWindowSize();
    const ref = useRef();
    const { scrollY, scrollYProgress } = useScroll();
  
    const pageRange = [0, 0.15, 0.3, 0.5, 0.7, 1];
    const lengthRange = ["75vh", "45vh", "50vh", "45vh", "50vh", "100vh"];
    const calcHeight = useTransform(scrollYProgress, pageRange, lengthRange);
  
    const [scrollYValue, setScrollYValue] = useState(0);
    const [scrollYProgressValue, setScrollYProgressValue] = useState(0);
  
    const refreshPage = () => {
      window.location.reload();
    };
  
    useEffect(() => {
      scrollY.onChange((v) => setScrollYValue(v));
      scrollYProgress.onChange((v) => setScrollYProgressValue(v));
    }, [scrollY, scrollYProgress]);
  
    return (
      <div
        style={{
          position: "relative"
        }}
      >
        <div
          style={{
            position: "fixed",
            top: 0,
            fontFamily: "monospace",
            fontWeight: 600,
            zIndex: 50
          }}
        >
          {"height: " +
            calcHeight.get() +
            " | y: " +
            scrollYValue +
            " | percentage: " +
            (scrollYProgressValue * 100).toFixed(0) +
            "% | WindowSize h: " +
            windowSize.height +
            " w: " +
            windowSize.width +
            "   "}
          <button onClick={refreshPage}>refresh</button>
        </div>
        <div
          style={{
            position: "absolute",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            zIndex: 20,
            pointerEvents: "none"
          }}
        >
          <motion.div
            initial="hidden"
            animate="visible"
            variants={LINE_VARIANTS}
            style={{ backgroundColor: "black", width: 3, height: calcHeight }}
          />
        </div>
        <SnapParent
          ref={ref}
          style={{
            position: "absolute"
          }}
        >
          {children}
        </SnapParent>
      </div>
    );
  };