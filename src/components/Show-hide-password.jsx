export default function ShowHidePassword({ forId, label, ...props }) {
    return (
        <label htmlFor={forId}>
            <input {...props} /> &nbsp; {label}
        </label>
    )
}