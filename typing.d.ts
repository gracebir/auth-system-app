export type tInputType = {
    type: string
    placeholder: string
    onChange: React.ChangeEventHandler<HTMLInputElement>
    onBlur?: React.FocusEventHandler<HTMLInputElement>
    value: string | number
    name: string
    errorMsg?: string
    label: string
}

export type tDropdrownProps = {
    placeholder: string
    setPlaceholder: React.Dispatch<React.SetStateAction<string>>
    data: Array<string>
    typeDrop: string
}