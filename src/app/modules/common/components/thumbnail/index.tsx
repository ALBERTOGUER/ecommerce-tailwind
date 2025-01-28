import { Container, clx } from "@medusajs/ui";
import Image from "next/image";
import React from "react";

type ThumbnailProps = {
  // TODO: Fix image typings
  images?: string;
  size?: "small" | "medium" | "large" | "full" | "square";
  isFeatured?: boolean;
  className?: string;
  "data-testid"?: string;
};

const Thumbnail: React.FC<ThumbnailProps> = ({
  images,
  size = "small",
  isFeatured,
  className,
  "data-testid": dataTestid,
}) => {
  return (
    <Container
      className={clx(
        "relative w-full overflow-hidden p-4  bg-slate-100 rounded-sm  border-solid transition-shadow ease-in-out duration-150",
        className,
        {
          "aspect-[11/14]": isFeatured,
          "aspect-[9/16]": !isFeatured && size !== "square",
          "aspect-[1/1]": size === "square",
          "w-[180px]": size === "small",
          "w-[290px]": size === "medium",
          "w-[440px]": size === "large",
          "w-full": size === "full",
        }
      )}
      data-testid={dataTestid}
    >
      <ImageOrPlaceholder image={images} size={size} />
    </Container>
  );
};

const ImageOrPlaceholder = ({
  image,
}: Pick<ThumbnailProps, "size"> & { image?: string }) => {
  return (
    image && (
      <Image
        src={image}
        priority
        unoptimized={true}
        alt="Thumbnail"
        className="absolute inset-0 object-cover object-center"
        draggable={false}
        quality={50}
        sizes="(max-width: 576px) 280px, (max-width: 768px) 360px, (max-width: 992px) 480px, 800px"
        fill
      />
    )
  );
};

export default Thumbnail;
