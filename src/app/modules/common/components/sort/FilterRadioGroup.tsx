import { EllipseMiniSolid } from "@medusajs/icons"
import { Label, RadioGroup, Text, clx } from "@medusajs/ui"

type FilterRadioGroupProps = {
    title: string
    items: {
        value: string
        label: string
    }[]
    value: any
    handleChange: (...args: any[]) => void
    "data-testid"?: string
}

const FilterRadioGroup = ({
    title,
    items,
    value,
    handleChange,
    "data-testid": dataTestId,
}: FilterRadioGroupProps) => {
    return (
        <div className="flex gap-x-3 flex-col gap-y-3 text-xs">
            <Text className="text-gray-400" >{title}</Text>
            <RadioGroup data-testid={dataTestId} onValueChange={handleChange}>
                {items?.map((i) => (
                    <div
                        key={i.value}
                        className={clx("flex gap-x-2 items-center")}
                    >
                        {i.value === value && <EllipseMiniSolid />}
                        <RadioGroup.Item
                            checked={i.value === value}
                            className="hidden peer"
                            id={i.value}
                            value={i.value}
                        />
                        <Label
                            htmlFor={i.value}

                            data-testid="radio-label"
                            data-active={i.value === value}
                        >
                            {i.label}
                        </Label>
                    </div>
                ))}
            </RadioGroup>
        </div>
    )
}

export default FilterRadioGroup
