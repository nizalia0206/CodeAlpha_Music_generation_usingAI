async function generateAndPlay() {
  try {
    await Tone.start(); // this enables audio on first user interaction
    console.log("🔊 Audio started");

    const response = await fetch('/generate');
    const notes = await response.json();
    console.log("🎶 Notes received:", notes);

    const synth = new Tone.Synth().toDestination();
    const now = Tone.now();

    notes.forEach((note, index) => {
      const midiNote = note + 60;
      const freq = Tone.Frequency(midiNote, "midi").toFrequency();
      synth.triggerAttackRelease(freq, "8n", now + index * 0.4);
    });

  } catch (error) {
    console.error("❌ Error generating/playing music:", error);
  }
}
