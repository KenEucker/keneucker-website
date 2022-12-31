export default function PreLoad(props) {
  return (
    <>
      <link rel="preload" href="/etc/Hubot-Sans.woff2" as="font" type="font/woff2" crossOrigin={true} />
      <link rel="preload" href="/etc/Mona-Sans.woff2" as="font" type="font/woff2" crossOrigin={true} />
    </>
  );
}
