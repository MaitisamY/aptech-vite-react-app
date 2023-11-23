import Form from "./Form";
import Div from "./Div";
import Input from "./Input";

export default function TestModal({ id, className, title, requiredFields, closeModal, instructions }) {
    return (
        <Div id={id} className={className}>
            <Div className="modal-content">
                <Div className="modal-header">
                    <span onClick={closeModal} className="close">&times;</span>
                    <h2>{title}</h2>
                </Div>
                <Div className="modal-body">
                    <h3>{requiredFields}</h3>
                    <p>{instructions}</p>
                    <Form>
                        <Input type="text" placeholder="Set title for test*" />
                        <Input type="text" placeholder="Set time for test*" />
                        <Input type="submit" value="Create" />
                    </Form>
                </Div>
            </Div>
        </Div>
    )
}

