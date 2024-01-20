import { getPlaiceholder } from "plaiceholder";

export async function getBase64(imageUrl: string) {
  try {
    const res = await fetch(imageUrl);

    if (!res.ok) {
      throw new Error(`Failed to fetch image: ${res.status} ${res.statusText}`);
    }

    const buffer = await res.arrayBuffer();

    const { base64 } = await getPlaiceholder(Buffer.from(buffer));

    //console.log(`base64: ${base64}`)

    return base64;
  } catch (e) {
    if (e instanceof Error) console.log(e.stack);
  }
}

export async function addBlurredDataUrls(images: any): Promise<any[]> {
  // Make all requests at once instead of awaiting each one - avoiding waterfall
  const base64Promises = images.photos.map((photo: any) =>
    getBase64(photo.src.large)
  );

  // Resolve all requests in order
  const base64Results = await Promise.all(base64Promises);

  const photosWithBlur: any[] = images.photos.map((photo: any, i: number) => {
    photo.blurredDataUrl = base64Results[i];
    return photo;
  });

  return photosWithBlur;
}
