import { Text } from "@medusajs/ui";

export default function PreviewPrice({ price }: { price: number }) {
  if (!price) {
    return null;
  }

  return (
    <>
      <Text
        className={"font-normal font-sans txt-medium text-sky-600"}
        data-testid="price"
      >
        ${price.toString()}
      </Text>
    </>
  );
}
