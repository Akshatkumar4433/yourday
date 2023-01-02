export default function EnterText() {
    return (
        <div>
            <form action = 'api/formData' method = 'post'>
                <input 
                    type = 'text'
                    id = 'first' 
                    name = 'first'
                />
                <input 
                    type = 'text' 
                    id = 'second' 
                    name = 'second'
                />
                <button type = 'submit'>Submit</button>
            </form>
        </div>
    )
}



