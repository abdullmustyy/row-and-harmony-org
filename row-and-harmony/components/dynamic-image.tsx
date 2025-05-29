import { getImage } from "@/lib/plaiceholder";
import Image from "next/image";

type IDynamicImageProps = React.ComponentProps<typeof Image>;

const DynamicImage = async ({ src, alt, ...rest }: IDynamicImageProps) => {
    const { base64, img } = await getImage(src as string);

    return <Image {...img} alt={alt} placeholder="blur" blurDataURL={base64} {...rest} />;
};

export default DynamicImage;
