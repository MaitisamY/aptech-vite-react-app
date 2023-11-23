export default function Table({ children, ...props }) {
    return (
        <table {...props}>
            {children}
        </table>
    )
}