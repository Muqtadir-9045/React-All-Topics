import { useState } from "react";

export default function CommentsForm() {
    const [formData, setFormData] = useState({
        username: "",
        remarks: "",
        rating: 5,
    });

    const handleInputChange = (event) => {
        setFormData((currData) => {
            return { ...currData, [event.target.name]: event.target.value };
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
    };

    return (
        <div>
            <h4>Give a Comment!</h4>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username</label>
                <input
                    placeholder="username"
                    type="text"
                    value={formData.username}
                    onChange={handleInputChange}
                    id="username"
                    name="username"
                />
                <br /><br />

                <label htmlFor="remark">Remarks</label>
                <textarea
                    value={formData.remarks}
                    placeholder="add few remarks"
                    onChange={handleInputChange}
                    id="remark"
                    name="remarks" // Fixed typo
                ></textarea>
                <br /><br />

                <label htmlFor="rating">Rating</label>
                <input
                    placeholder="rating"
                    type="number"
                    min={1}
                    max={5}
                    value={formData.rating}
                    onChange={handleInputChange}
                    id="rating"
                    name="rating"
                />
                <br /><br />

                <button>Add Comment</button>
            </form>
        </div>
    );
}
