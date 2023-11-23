export default function CommonButton({ text, ...props }) {
    return (
        <button
            {...props}
        >
            {text}
        </button>
    )
}

export function PaginationButton({ text, ...props }) {
    return (
        <button
            {...props}
        >
            {text}
        </button>
    )
}