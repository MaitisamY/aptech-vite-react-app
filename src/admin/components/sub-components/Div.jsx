export default function Div({ children, ...props }) {
    return (
        <div {...props}>
            {children}
        </div>
    )
}