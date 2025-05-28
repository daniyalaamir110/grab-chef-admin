export function formatSecondsToHMS(seconds: number): string {
  // const hrs = Math.floor(seconds / 3600);
  const mins = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;

  // const formattedHours = String(hrs).padStart(2, '0');
  const formattedMinutes = String(mins).padStart(2, '0');
  const formattedSeconds = String(secs).padStart(2, '0');

  return `${formattedMinutes}:${formattedSeconds}`;
}
