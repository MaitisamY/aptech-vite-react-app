import Input from "./Input";
import { tests } from "../Datatable-data";
import Div from "./Div";
import Form from "./Form";

export function Modal({ id, className, title, requiredFields, closeModal }) {
    return (
        <Div id={id} className={className}>
            <Div className="modal-content">
                <Div className="modal-header">
                    <span onClick={closeModal} className="close">&times;</span>
                    <h2>{title}</h2>
                </Div>
                <Div className="modal-body">
                    <h3>{requiredFields}</h3>
                    <Form onSubmit={closeModal} /* Temprorary onSubmit */>
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

export function SubjectModal({ id, className, title, requiredFields, closeModal, instructions }) {
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
                    <Form onSubmit={closeModal} /* Temprorary onSubmit */>
                        <Input type="text" placeholder="Set subject name*" />
                        <Input type="submit" value="Create" />
                    </Form>
                </Div>
            </Div>
        </Div>
    )
}

export function ClassModal({ id, className, title, requiredFields, closeModal, instructions }) {
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
                    <Form onSubmit={closeModal} /* Temprorary onSubmit */>
                        <Input type="text" placeholder="Set class name*" />
                        <Input type="number" placeholder="Set class strength*" />
                        <Input type="submit" value="Create" />
                    </Form>
                </Div>
            </Div>
        </Div>
    )
}

export function TeacherModal({ id, className, title, requiredFields, closeModal, instructions }) {
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
                    <Form onSubmit={closeModal} /* Temprorary onSubmit */>
                        <Input type="text" placeholder="Set teacher name*" />
                        <Input type="text" placeholder="Set teacher email*" />
                        <Input type="text" placeholder="Set teacher password*" />
                        <Input type="submit" value="Create" />
                    </Form>
                </Div>
            </Div>
        </Div>
    )
}

export function StudentModal({ id, className, title, requiredFields, closeModal, instructions }) {
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
                    <Form onSubmit={closeModal} /* Temprorary onSubmit */>
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

export function TestModal({ id, className, title, requiredFields, closeModal, instructions }) {
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
                    <Form onSubmit={closeModal} /* Temprorary onSubmit */>
                        <Input type="text" placeholder="Set title for test*" />
                        <Input type="text" placeholder="Set time for test*" />
                        <Input type="submit" value="Create" />
                    </Form>
                </Div>
            </Div>
        </Div>
    )
}

export function QuestionModal({ id, className, title, requiredFields, closeModal, instructions }) {
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
                    <Form onSubmit={closeModal} /* Temprorary onSubmit */>
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


