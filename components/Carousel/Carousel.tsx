"use client";
import React, { useState } from "react";
import "./Carousel.css";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { Image } from "@mantine/core";
import { welcomeData } from "../../utils/mock";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import clsx from "clsx";
import { SliderCard } from "../Card/SliderCard/SliderCard";

const slides = welcomeData?.map((item: any, key: any) => {
  return (
    <>
      <div
        style={{
          height: "auto",
          width: "auto",
        }}
        className="keen-slider__slide number-slide1"
      >
        <SliderCard />
      </div>
    </>
  );
});

export default function Carousel() {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  return (
    <>
      <div className="navigation-wrapper">
        <div
          style={{ background: "transparent" }}
          ref={sliderRef}
          className="keen-slider"
        >
          {slides}
        </div>
        {loaded && instanceRef.current && (
          <>
            <IconChevronLeft
              className={clsx(
                currentSlide === 0
                  ? ["arrow", "arrow--left", "arrow--disabled"]
                  : ["arrow", "arrow--left"]
              )}
              onClick={(e: any) =>
                e.stopPropagation() || instanceRef.current?.prev()
              }
              /* disabled={currentSlide === 0 } */
            />

            <IconChevronRight
              className={clsx(
                currentSlide ===
                  instanceRef.current.track.details.slides.length - 1
                  ? ["arrow", "arrow--right", "arrow--disabled"]
                  : ["arrow", "arrow--right"]
              )}
              onClick={(e: any) =>
                e.stopPropagation() || instanceRef.current?.next()
              }
            />
          </>
        )}
      </div>
      {loaded && instanceRef.current && (
        <div className="dots">
          {[
            //@ts-ignore
            ...Array(instanceRef.current.track.details.slides.length).keys(),
          ].map((idx) => {
            return (
              <button
                key={idx}
                onClick={() => {
                  instanceRef.current?.moveToIdx(idx);
                }}
                className={"dot" + (currentSlide === idx ? " active" : "")}
              ></button>
            );
          })}
        </div>
      )}
    </>
  );
}

function Arrow(props: {
  disabled: boolean;
  left?: boolean;
  onClick: (e: any) => void;
}) {
  const disabeld = props.disabled ? " arrow--disabled" : "";
  return (
    <svg
      onClick={props.onClick}
      className={`arrow ${
        props.left ? "arrow--left" : "arrow--right"
      } ${disabeld}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      {props.left && (
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
      )}
      {!props.left && (
        <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
      )}
    </svg>
  );
}
