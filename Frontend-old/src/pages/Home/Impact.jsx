import React, { useEffect, useRef } from "react";
import "./Impact.css";
import ImpactImage from "../../assets/Home/ImpactImage.png";

const Impact = () => {
  // Titles/descs as plain strings (no JSX fragments) -> avoids stray attributes like `jsx`
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

  // duplicate for seamless loop
  const duplicatedItems = [...items, ...items];

  // refs for DOM + mutable state
  const trackRef = useRef(null);
  const rafRef = useRef(null);
  const isPointerDown = useRef(false);
  const startX = useRef(0);
  const startScrollLeft = useRef(0);
  const userInteracting = useRef(false);

  // tweak these to change behaviour
  const speed = useRef(0.6); // pixels per frame auto-scroll speed
  const resumeAfterMs = 700; // resume auto-scroll this ms after interaction ends

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    // ensure programmatic scroll isn't unexpectedly smooth
    track.style.scrollBehavior = "auto";

    // RAF loop for auto-scroll
    const loop = () => {
      // only auto-scroll when user not interacting
      if (!isPointerDown.current && !userInteracting.current) {
        track.scrollLeft += speed.current;

        // wrap when we've passed half (we duplicated items)
        const half = track.scrollWidth / 2 || 0;
        if (half && track.scrollLeft >= half) {
          track.scrollLeft -= half;
        }
        if (half && track.scrollLeft < 0) {
          track.scrollLeft += half;
        }
      }
      rafRef.current = requestAnimationFrame(loop);
    };
    rafRef.current = requestAnimationFrame(loop);

    // ----- Pointer events (preferred) -----
    const supportsPointer = typeof window !== "undefined" && "PointerEvent" in window;

    // Handlers used for pointer, mouse & touch fallback
    const handlePointerDown = (clientX, pointerId, originalEventTarget) => {
      isPointerDown.current = true;
      userInteracting.current = true;
      startX.current = clientX;
      startScrollLeft.current = track.scrollLeft;

      // try capture so we keep getting moves/up
      if (supportsPointer && originalEventTarget && typeof originalEventTarget.setPointerCapture === "function") {
        try {
          originalEventTarget.setPointerCapture(pointerId);
        } catch (e) {}
      }
    };

    const handlePointerMove = (clientX) => {
      if (!isPointerDown.current) return;
      const dx = clientX - startX.current;
      track.scrollLeft = startScrollLeft.current - dx;

      // keep loop seamless while dragging
      const half = track.scrollWidth / 2 || 0;
      if (half) {
        if (track.scrollLeft < 0) track.scrollLeft += half;
        if (track.scrollLeft >= half) track.scrollLeft -= half;
      }
    };

    const handlePointerUp = (pointerId, originalEventTarget) => {
      if (supportsPointer && originalEventTarget && typeof originalEventTarget.releasePointerCapture === "function") {
        try {
          originalEventTarget.releasePointerCapture(pointerId);
        } catch (e) {}
      }
      isPointerDown.current = false;
      // keep `userInteracting` for a short while to avoid immediate autoplay jerk
      setTimeout(() => {
        userInteracting.current = false;
      }, resumeAfterMs);
    };

    // pointer events path
    let onPointerDown, onPointerMove, onPointerUp;
    if (supportsPointer) {
      onPointerDown = (e) => {
        // only left mouse button for pointerType 'mouse'
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
      // fallback: mouse & touch
      let onMouseMove, onMouseUp;
      const onMouseDown = (e) => {
        if (e.button !== 0) return;
        handlePointerDown(e.clientX, null, e.currentTarget);

        // attach to document so moves/up outside element still tracked
        onMouseMove = (ev) => handlePointerMove(ev.clientX);
        onMouseUp = (ev) => {
          handlePointerUp(null, e.currentTarget);
          document.removeEventListener("mousemove", onMouseMove);
          document.removeEventListener("mouseup", onMouseUp);
        };
        document.addEventListener("mousemove", onMouseMove);
        document.addEventListener("mouseup", onMouseUp);
      };

      const onTouchMove = (e) => {
        if (!e.touches || e.touches.length === 0) return;
        handlePointerMove(e.touches[0].clientX);
      };
      const onTouchStart = (e) => {
        if (!e.touches || e.touches.length === 0) return;
        handlePointerDown(e.touches[0].clientX, null, track);
      };
      const onTouchEnd = () => handlePointerUp(null, track);

      track.addEventListener("mousedown", onMouseDown);
      track.addEventListener("touchstart", onTouchStart, { passive: true });
      track.addEventListener("touchmove", onTouchMove, { passive: true });
      track.addEventListener("touchend", onTouchEnd);

      // cleanup references for removal
      onPointerDown = onMouseDown;
      onPointerMove = onTouchMove;
      onPointerUp = onTouchEnd;
    }

    // cleanup on unmount
    return () => {
      cancelAnimationFrame(rafRef.current);
      if (supportsPointer) {
        track.removeEventListener("pointerdown", onPointerDown);
        track.removeEventListener("pointermove", onPointerMove);
        track.removeEventListener("pointerup", onPointerUp);
        track.removeEventListener("pointercancel", onPointerUp);
        track.removeEventListener("pointerleave", onPointerUp);
      } else {
        track.removeEventListener("mousedown", onPointerDown);
        track.removeEventListener("touchstart", onPointerMove);
        track.removeEventListener("touchmove", onPointerMove);
        track.removeEventListener("touchend", onPointerUp);
      }
    };
  }, []);

  // helper to render line breaks in desc/title (we used plain strings)
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
        className="absolute right-0 top-1/2 -translate-y-1/2 z-0 object-cover hidden md:block"
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
                {renderWithBreaks(item.title)}<br></br>
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
