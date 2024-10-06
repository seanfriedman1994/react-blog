import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('Mario');
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = {
            title, body, author
        };

        setIsPending(true);

        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: {'Content-Type': "application/json"},
            body: JSON.stringify(blog)
        }).then(() => {
            setIsPending(false);
            //history.go(-1); - go back 1 page
            history.push('/');
        });

        
    }

    return ( 
    <div className="create">
        <h2>Add a New Blog</h2>
        <form onSubmit={handleSubmit}>
            <label>Title</label>
            <input 
                type="text"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
             />
            <label>Body</label>
            <textarea 
                required
                rows={4}
                value={body}
                onChange={(e) => setBody(e.target.value)}
             ></textarea>
             <label>Author</label>
            <select name="author" id="author" value={author} onChange={(e) => setAuthor(e.target.value)}>
                <option value="Mario">Mario</option>
                <option value="Luigi">Luigi</option>
                <option value="Yoshi">Yoshi</option>
            </select>
            { !isPending && <button>Add Blog</button> }
            { isPending && <button disabled>Adding Blog...</button> }
        </form>
    </div>
    );
}
 
export default Create;