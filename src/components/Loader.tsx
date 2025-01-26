import React, { ReactElement } from "react";
import { AnimatePresence, motion } from "framer-motion";
type LoaderProps = { isLoading: boolean; setIsLoading: () => void };

function Loader({ isLoading }: LoaderProps): ReactElement {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="loader"
          exit={{ scale: 0 }}
          key="motiondivleave"
          transition={{
            duration: 0.45,
            ease: "easeInOut",
          }}
        >
          <motion.svg
            id="logo"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
          >
            <title>David Francisco&apos;s Logo</title>
            <g>
              <g id="K" transform="translate(40.000000, 35.000000)">
                <motion.path
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 1,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                  exit={{
                    scale: 2,
                  }}
                  fill="currentColor"
                  d="M 0 28.24 L 0 0.4 Q 1.88 0.2 3.68 0.1 Q 5.48 0 7.8 0 Q 11.145 0 13.644 0.967 A 11.679 11.679 0 0 1 14.02 1.12 Q 16.64 2.24 18.34 4.2 Q 20.04 6.16 20.86 8.74 A 17.702 17.702 0 0 1 21.649 13.138 A 20.603 20.603 0 0 1 21.68 14.28 A 18.123 18.123 0 0 1 21.088 18.959 A 16.721 16.721 0 0 1 20.84 19.8 Q 20 22.4 18.26 24.38 Q 16.52 26.36 13.82 27.5 Q 11.12 28.64 7.36 28.64 Q 5.08 28.64 3.38 28.52 Q 1.68 28.4 0 28.24 Z M 3.8 3.48 L 3.8 25.12 Q 4.64 25.24 5.56 25.28 Q 6.48 25.32 7.48 25.32 A 15.162 15.162 0 0 0 9.946 25.131 Q 11.917 24.806 13.36 23.92 Q 15.64 22.52 16.72 20.02 Q 17.8 17.52 17.8 14.28 Q 17.8 11.4 16.72 8.88 Q 15.64 6.36 13.4 4.82 A 8.358 8.358 0 0 0 10.579 3.596 Q 9.443 3.325 8.118 3.286 A 15.203 15.203 0 0 0 7.68 3.28 Q 6.52 3.28 5.56 3.34 Q 4.6 3.4 3.8 3.48 Z"
                />
              </g>
              <motion.path
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{
                  duration: 1,
                  ease: "easeInOut",
                }}
                exit={{
                  scale: 2,
                }}
                stroke="currentColor"
                strokeWidth="5"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M 50, 5
          L 11, 27
          L 11, 72
          L 50, 95
          L 89, 73
          L 89, 28 z"
              />
            </g>
          </motion.svg>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
export default Loader;
