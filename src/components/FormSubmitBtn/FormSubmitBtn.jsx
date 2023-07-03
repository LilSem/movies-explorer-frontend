import './FormSubmitBtn.css';

function FormSubmitBtn ({onSubmit, textBtn}) {
    return (
        <>
            <button onSubmit={onSubmit} className="submit-btn">
                {textBtn}
            </button>
        </>
    );
}

export default FormSubmitBtn;
