export default function Page() {
  return (
    <video
      width="1200"
      height="740"
      className="w-full "
      autoPlay
      muted
      loop
    >
      <source src="home.mp4" type="video/mp4" />
    </video>
  );
}
