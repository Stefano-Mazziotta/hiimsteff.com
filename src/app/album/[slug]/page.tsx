export default function AlbumPage({ params }: { params: { slug: string } }) {
  return <div>{params.slug}</div>;
}
