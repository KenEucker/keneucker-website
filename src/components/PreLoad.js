export default function PreLoad(props) {
  return (
    <>
      <link rel="preload" href="/font/Hubot-Sans.woff2" as="font" type="font/woff2" crossOrigin={true} />
      <link rel="preload" href="/font/Mona-Sans.woff2" as="font" type="font/woff2" crossOrigin={true} />
    </>
  );
}
