import React, { useEffect, useRef } from "react";
import "./Impact.css";
import ImpactImage from "../../assets/Home/ImpactImage.png";

const Impact = () => {
  const items = [
    { title: "Early Detection", desc: "Mobile screening camps" },
    {
      title: "Support & Advocacy",
      desc:
        "Counselling, survivor support & advocacy for better cancer care access",
    },
    {
      title: "Training",
      desc:
        "Education for healthcare workers & volunteers to promote early detection & support patients",
    },
    {
      title: "Treatment",
      desc:
        "Free surgeries for underprivileged patients, in partnership with the Asian Cancer Institute, Mumbai",
    },
    {
      title: "Awareness & Education",
      desc:
        "Cancer awareness drives, tobacco-cessation programmes & breast health education",
    },
    {
      title: "Financial Support",
      desc: "Aid to low-income patients for life-saving cancer treatments",
    },
  ];

  const duplicatedItems = [...items, ...items];

  const trackRef = useRef(null);
  const rafRef = useRef(null);
  const isPointerDown = useRef(false);
  const startX = useRef(0);
  const startScrollLeft = useRef(0);
  const userInteracting = useRef(false);

  const speed = useRef(0.6);
  const resumeAfterMs = 700;

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    track.style.scrollBehavior = "auto";

    const isIOS =
      typeof navigator !== "undefined" &&
      /iPad|iPhone|iPod/.test(navigator.userAgent);

    const supportsPointer =
      typeof window !== "undefined" &&
      "PointerEvent" in window &&
      !isIOS;

    const loop = () => {
      if (!isPointerDown.current && !userInteracting.current) {
        const half = track.scrollWidth / 2;
        let next = track.scrollLeft + speed.current;
        if (next >= half) next -= half;
        track.scrollLeft = next;
      }
      rafRef.current = requestAnimationFrame(loop);
    };

    rafRef.current = requestAnimationFrame(loop);

    const handlePointerDown = (clientX, pointerId, target) => {
      isPointerDown.current = true;
      userInteracting.current = true;
      startX.current = clientX;
      startScrollLeft.current = track.scrollLeft;

      if (
        supportsPointer &&
        target &&
        typeof target.setPointerCapture === "function"
      ) {
        try {
          target.setPointerCapture(pointerId);
        } catch {}
      }
    };

    const handlePointerMove = (clientX) => {
      if (!isPointerDown.current) return;
      const dx = clientX - startX.current;
      track.scrollLeft = startScrollLeft.current - dx;

      const half = track.scrollWidth / 2;
      if (track.scrollLeft < 0) track.scrollLeft += half;
      if (track.scrollLeft >= half) track.scrollLeft -= half;
    };

    const handlePointerUp = (pointerId, target) => {
      if (
        supportsPointer &&
        target &&
        typeof target.releasePointerCapture === "function"
      ) {
        try {
          target.releasePointerCapture(pointerId);
        } catch {}
      }
      isPointerDown.current = false;
      setTimeout(() => {
        userInteracting.current = false;
      }, resumeAfterMs);
    };

    let onPointerDown, onPointerMove, onPointerUp;

    if (supportsPointer) {
      onPointerDown = (e) => {
        if (e.pointerType === "mouse" && e.button !== 0) return;
        handlePointerDown(e.clientX, e.pointerId, e.currentTarget);
      };
      onPointerMove = (e) => handlePointerMove(e.clientX);
      onPointerUp = (e) => handlePointerUp(e.pointerId, e.currentTarget);

      track.addEventListener("pointerdown", onPointerDown);
      track.addEventListener("pointermove", onPointerMove);
      track.addEventListener("pointerup", onPointerUp);
      track.addEventListener("pointercancel", onPointerUp);
      track.addEventListener("pointerleave", onPointerUp);
    } else {
      const onTouchStart = (e) => {
        if (!e.touches?.length) return;
        handlePointerDown(e.touches[0].clientX, null, track);
      };
      const onTouchMove = (e) => {
        if (!e.touches?.length) return;
        handlePointerMove(e.touches[0].clientX);
      };
      const onTouchEnd = () => handlePointerUp(null, track);

      track.addEventListener("touchstart", onTouchStart, { passive: true });
      track.addEventListener("touchmove", onTouchMove, { passive: true });
      track.addEventListener("touchend", onTouchEnd);

      onPointerDown = onTouchStart;
      onPointerMove = onTouchMove;
      onPointerUp = onTouchEnd;
    }

    const handleVisibility = () => {
      if (document.hidden) cancelAnimationFrame(rafRef.current);
      else rafRef.current = requestAnimationFrame(loop);
    };
    document.addEventListener("visibilitychange", handleVisibility);

    return () => {
      cancelAnimationFrame(rafRef.current);
      document.removeEventListener("visibilitychange", handleVisibility);
      if (supportsPointer) {
        track.removeEventListener("pointerdown", onPointerDown);
        track.removeEventListener("pointermove", onPointerMove);
        track.removeEventListener("pointerup", onPointerUp);
        track.removeEventListener("pointercancel", onPointerUp);
        track.removeEventListener("pointerleave", onPointerUp);
      } else {
        track.removeEventListener("touchstart", onPointerDown);
        track.removeEventListener("touchmove", onPointerMove);
        track.removeEventListener("touchend", onPointerUp);
      }
    };
  }, []);

  const renderWithBreaks = (text) =>
    text.split("\n").map((line, i, arr) => (
      <span key={i}>
        {line}
        {i < arr.length - 1 && <br />}
      </span>
    ));

  return (
    <section className="bg-white py-22 relative">
      <h2 className="text-4xl font-bold font-visby text-purple-900 mb-8 pl-12">
        What we do, <br />
        How we drive impact
      </h2>

      <img
        src={ImpactImage}
        alt="Impact"
        className="absolute right-0 top-1/2 -translate-y-1/2 z-0 object-cover hidden lg:block"
        draggable="false"
        onDragStart={(e) => e.preventDefault()}
      />

      <div className="impact-wrapper relative z-10">
        <div className="impact-track" ref={trackRef} aria-label="impact carousel">
          {duplicatedItems.map((item, idx) => (
            <div
              key={idx}
              className="kard text-center bg-white/80 rounded-[30px] shadow w-[264px] h-[289px] space-y-4"
              onDragStart={(e) => e.preventDefault()}
            >
              <h3 className="font-semibold text-2xl text-black font-visby">
                {renderWithBreaks(item.title)}<br />
              </h3>
              <p className="font-didact text-lg">{renderWithBreaks(item.desc)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Impact;
