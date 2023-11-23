import Input from "./Input";
import { tests } from "../Datatable-data";
import Div from "./Div";
import Form from "./Form";

export function Modal({ title, requiredFields, closeModal, ...props }) {
    return (
        <Div {...props}>
            <Div className="modal-content">
                <Div className="modal-header">
                    <span onClick={closeModal} className="close">&times;</span>
                    <h2>{title}</h2>
                </Div>
                <Div className="modal-body">
                    <h3>{requiredFields}</h3>
                    <Form onSubmit={closeModal}>
                        <Input type="text" placeholder="Set admin name*" />
                        <Input type="text" placeholder="Set admin email*" />
                        <Input type="text" placeholder="Set admin password*" />
                        <Input type="submit" value="Create" />
                    </Form>
                </Div>
            </Div>
        </Div>
    )
}

export function SubjectModal({ title, requiredFields, closeModal, instructions, ...props }) {
    return (
        <Div {...props}>
            <Div className="modal-content">
                <Div className="modal-header">
                    <span onClick={closeModal} className="close">&times;</span>
                    <h2>{title}</h2>
                </Div>
                <Div className="modal-body">
                    <h3>{requiredFields}</h3>
                    <p>{instructions}</p>
                    <Form onSubmit={closeModal}>
                        <Input type="text" placeholder="Set subject name*" />
                        <Input type="submit" value="Create" />
                    </Form>
                </Div>
            </Div>
        </Div>
    )
}

export function ClassModal({ title, requiredFields, closeModal, instructions, ...props }) {
    return (
        <Div {...props}>
            <Div className="modal-content">
                <Div className="modal-header">
                    <span onClick={closeModal} className="close">&times;</span>
                    <h2>{title}</h2>
                </Div>
                <Div className="modal-body">
                    <h3>{requiredFields}</h3>
                    <p>{instructions}</p>
                    <Form onSubmit={closeModal}>
                        <Input type="text" placeholder="Set class name*" />
                        <Input type="number" placeholder="Set class strength*" />
                        <Input type="submit" value="Create" />
                    </Form>
                </Div>
            </Div>
        </Div>
    )
}

export function StudentModal({ title, requiredFields, closeModal, instructions, ...props }) {
    return (
        <Div {...props}>
            <Div className="modal-content">
                <Div className="modal-header">
                    <span onClick={closeModal} className="close">&times;</span>
                    <h2>{title}</h2>
                </Div>
                <Div className="modal-body">
                    <h3>{requiredFields}</h3>
                    <p>{instructions}</p>
                    <Form onSubmit={closeModal}>
                        <Input type="text" placeholder="Set student name*" />
                        <Input type="text" placeholder="Set student email*" />
                        <Input type="text" placeholder="Set student password*" />
                        <Input type="submit" value="Create" />
                    </Form>
                </Div>
            </Div>
        </Div>
    )
}

export function TestModal({ title, requiredFields, closeModal, instructions, ...props }) {
    return (
        <Div {...props}>
            <Div className="modal-content">
                <Div className="modal-header">
                    <span onClick={closeModal} className="close">&times;</span>
                    <h2>{title}</h2>
                </Div>
                <Div className="modal-body">
                    <h3>{requiredFields}</h3>
                    <p>{instructions}</p>
                    <Form onSubmit={closeModal}>
                        <Input type="text" placeholder="Set title for test*" />
                        <Input type="text" placeholder="Set time for test*" />
                        <Input type="submit" value="Create" />
                    </Form>
                </Div>
            </Div>
        </Div>
    )
}

export function QuestionModal({ title, requiredFields, closeModal, instructions, ...props }) {
    return (
        <Div {...props}>
            <Div className="modal-content">
                <Div className="modal-header">
                    <span onClick={closeModal} className="close">&times;</span>
                    <h2>{title}</h2>
                </Div>
                <Div className="modal-body">
                    <h3>{requiredFields}</h3>
                    <p>{instructions}</p>
                    <Form onSubmit={closeModal}>
                        <textarea placeholder="Type in your question" rows="4" name="question" id="question" ></textarea>
                        <select>
                            <option value="1" selected>Select Test</option>
                            { tests.map((test) => {
                                return (
                                    <option value={test.id}>{test.title}</option>
                                )
                            })}
                        </select>
                        <Input type="submit" value="Create" />
                    </Form>
                </Div>
            </Div>
        </Div>
    )
}

