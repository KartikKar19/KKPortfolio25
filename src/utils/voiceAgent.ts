type VoiceEvent = {
  event: string;
  intent?: {
    name: string;
    confidence: number;
  };
  parameters?: {
    section?: string;
  };
  rawTranscript?: string;
};

declare global {
  interface Window {
    ElevenLabsVoiceAgent?: any;
  }
}

export function initVoiceAgent() {
  const agent = window.ElevenLabsVoiceAgent;

  if (!agent) {
    console.warn("Voice Agent SDK not available.");
    return;
  }

  agent.init({
    clientTool: {
      type: "web",
      identifier: "voice-nav-agent",
      name: "returnToInternalSection"
    },
    onEvent: (event: VoiceEvent) => {
      if (
        event.event === "voiceCommand" &&
        event.intent?.name === "returnToInternalSection"
      ) {
        const sectionId = event.parameters?.section?.toLowerCase();
        if (sectionId) {
          const el = document.getElementById(sectionId);
          if (el) {
            el.scrollIntoView({ behavior: "smooth" });
            console.log(`Scrolled to section: #${sectionId}`);
          } else {
            console.warn(`No section found for id "${sectionId}"`);
          }
        }
      }
    }
  });
}
