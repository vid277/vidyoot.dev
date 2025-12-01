"use client";

import { useEffect, useRef } from "react";
import * as amplitude from "@amplitude/analytics-browser";
import { sessionReplayPlugin } from "@amplitude/plugin-session-replay-browser";

export default function AmplitudeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const initialized = useRef(false);

  useEffect(() => {
    // Ensure amplitude is only initialized once
    if (!initialized.current) {
      // Add Session Replay to the Amplitude instance
      amplitude.add(sessionReplayPlugin({ sampleRate: 1 }));

      // Initialize amplitude with autocapture enabled
      amplitude.init("dccb5947d9201cd907589233333604fe", {
        autocapture: true,
      });

      initialized.current = true;
    }
  }, []);

  return <>{children}</>;
}
